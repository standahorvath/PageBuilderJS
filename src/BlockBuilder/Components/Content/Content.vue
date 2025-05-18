<template>
	<div class="bb-content">
		<EmptyContent v-if="!instances.length" />

		<Draggable v-model="internalInstances" item-key="nonce" :group="{ name: 'blocks', pull: true, put: true }"
			:animation="200" ghost-class="drag-ghost" chosen-class="drag-chosen" drag-class="drag-drag"
			@end="onMoveInstance" @change="onChangeInstance($event)">
			<template #item="{ element: instance }">
				<component :is="getComponent(instance)" :data="instance.structureData" :module="instance.module"
					@remove="onRemove(instance)" @edit="onEdit(instance)" @duplicate="onDuplicate(instance)">
					<div class="bb-content">
						<!-- Nested children -->
						<Draggable v-model="instance.children" item-key="nonce" :animation="200"
							ghost-class="drag-ghost" :data-nonce="instance.nonce" chosen-class="drag-chosen"
							drag-class="drag-drag" :group="{ name: 'blocks', pull: true, put: true }">
							<template #item="{ element: child }">
								<component :is="getComponent(child)" :data="child.structureData" :module="child.module"
									@remove="onRemove(child)" @edit="onEdit(child)" @duplicate="onDuplicate(child)">
									<div class="bb-content">
										<!-- Nested children -->
										<Draggable v-model="child.children" item-key="nonce" :animation="200"
											ghost-class="drag-ghost" :data-nonce="child.nonce"
											chosen-class="drag-chosen" drag-class="drag-drag"
											:group="{ name: 'blocks', pull: true, put: true }">
											<template #item="{ element: subchild }">
												<component :is="getComponent(subchild)" :data="subchild.structureData"
													:module="subchild.module" @remove="onRemove(subchild)"
													@edit="onEdit(subchild)" @duplicate="onDuplicate(subchild)" />
											</template>
										</Draggable>
									</div>
								</component>
							</template>
						</Draggable>
					</div>
				</component>
			</template>
		</Draggable>
	</div>
</template>

<script setup lang="ts">
import ModuleColumn from "@/BlockBuilder/Components/Modules/Column.vue";
import ModuleChildrenable from "@/BlockBuilder/Components/Modules/Childrenable.vue";
import ModuleSpace from "@/BlockBuilder/Components/Modules/Space.vue";
import ModuleCustom from "@/BlockBuilder/Components/Modules/Custom.vue";
import EmptyContent from "@/BlockBuilder/Components/Content/Common/Empty.vue";
import { InstanceModule } from "@/types";
import { PropType, computed, ref, watch } from "vue";
import { useContentStore } from "@/store/ContentStore";
import Draggable from "vuedraggable";

const emits = defineEmits(["edit"]);

const props = defineProps({
	instances: {
		type: Array as PropType<InstanceModule[]>,
		required: true,
	},
});

const internalInstances = ref<InstanceModule[]>([...props.instances]);

watch(
	() => props.instances,
	(val) => {
		internalInstances.value = [...val];
	},
	{ deep: true }
);

const components = {
	space: ModuleSpace,
	column: ModuleColumn,
	custom: ModuleCustom,
	childrenable: ModuleChildrenable,
};

function getComponent(instance: InstanceModule) {
	const id = instance.id;
	if (Object.keys(components).includes(id)) {
		return components[id as keyof typeof components];
	}
	if (instance.module?.childrenable) {
		return components["childrenable"];
	}
	return components["custom"];
}

const onRemove = (instance: InstanceModule) => {
	useContentStore().removeInstance(instance, true);
};
const onDuplicate = (instance: InstanceModule) => {
	useContentStore().duplicateInstance(instance);
};

const onEdit = (instance: InstanceModule) => {
	emits("edit", instance);
};
const onMoveInstance = (event: any) => {
	if (event.pullMode) {
		return;
	}

	useContentStore().moveInstance(event.oldIndex, event.newIndex);
};

const onChangeInstance = (event: any) => {
	const { from, to, item, removed, added } = event;
	const fromParent = findParentByChildren(from);
	const toParent = findParentByChildren(to);

	if (fromParent && toParent) {
		return;
	}

	if (added) {
		const instance = added.element as InstanceModule
		useContentStore().addInstance(instance, added.newIndex);
	}
	if (removed) {
		const instance = removed.element as InstanceModule
		useContentStore().removeInstance(instance);
		useContentStore().instances = useContentStore().instances.filter(i => i);
	}
};

function findParentByChildren(containerEl: HTMLElement): InstanceModule | null {
	const parentNonce = containerEl?.dataset?.nonce as string | null;
	if (!parentNonce) return null;

	const findRecursive = (list: InstanceModule[]): InstanceModule | null => {
		for (const instance of list) {
			if (instance.nonce === parentNonce) return instance;
			if (instance.children?.length) {
				const found = findRecursive(instance.children);
				if (found) return found;
			}
		}
		return null;
	};

	return findRecursive(internalInstances.value);
}

</script>
<style>
.drag-ghost {
	opacity: 0.4;
}

.drag-chosen {
	transition: transform 0.3s ease;
}

.drag-drag {
	opacity: 0.8;
}
</style>
