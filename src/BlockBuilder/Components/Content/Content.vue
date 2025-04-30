<template>
	<div class="bb-content">
		<EmptyContent v-if="!instances.length" />

		<Draggable v-model="internalInstances" item-key="nonce" :group="{ name: 'blocks', pull: true, put: true }"
			:animation="200" 
			ghost-class="drag-ghost" 
			chosen-class="drag-chosen" 
			drag-class="drag-drag"
			>
			<template #item="{ element: instance }">
				<component :is="getComponent(instance.id)" :data="instance.structureData" :title="instance.id"
					@remove="onRemove(instance)" @edit="onEdit(instance)">
					<!-- Nested children -->
					<Draggable v-if="instance.children" v-model="instance.children" item-key="nonce"
						:group="{ name: 'blocks', pull: true, put: true }">
						<template #item="{ element: child }">
							<component :is="getComponent(child.id)" :data="child.structureData" :title="child.id" />
						</template>
					</Draggable>
				</component>
			</template>
		</Draggable>
	</div>
</template>

<script setup lang="ts">
import ModuleColumn from "@/BlockBuilder/Components/Modules/Column.vue";
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
};

function getComponent(id: string) {
	return components[id as keyof typeof components] || components["custom"];
}

const onRemove = (instance: InstanceModule) => {
	useContentStore().removeInstance(instance);
};

const onEdit = (instance: InstanceModule) => {
	emits("edit", instance);
};
</script>
<style>
.drag-ghost {
  opacity: 0.4;
}

.drag-chosen {
  transform: scale(0.97);
  transition: transform 0.3s ease;
}

.drag-drag {
  opacity: 0.8;
}
</style>
