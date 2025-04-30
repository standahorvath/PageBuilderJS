<template>
	<div class="bb-content">

		<EmptyContent v-if="!instances.length" />
		<component 
			v-for="instance in instances" 
			:key="instance.nonce"
			:is="typeof components[instance.id as keyof typeof components] !== 'undefined' ? components[instance.id as keyof typeof components] : components['custom']" 
			:data="instance.structureData"
			:title="instance.id"
			@remove="onRemove(instance)"
			@edit="onEdit(instance)"
		>
			<component 
				v-if="instance.children" 
				v-for="child in instance.children" 
				:key="child.nonce"
				:is="typeof components[child.id as keyof typeof components] !== 'undefined' ? components[child.id as keyof typeof components] : components['custom']" 
				:data="child.structureData"
				:title="child.id"
			>
			</component>
		</component>
	</div>
</template>
<script setup lang="ts">
import ModuleColumn from "@/BlockBuilder/Components/Modules/Column.vue";
import ModuleSpace from "@/BlockBuilder/Components/Modules/Space.vue";
import ModuleCustom from "@/BlockBuilder/Components/Modules/Custom.vue";
import EmptyContent from "@/BlockBuilder/Components/Content/Common/Empty.vue";
import { InstanceModule } from "@/types";
import { PropType } from "vue";
import { useContentStore } from "@/store/ContentStore";

const emits = defineEmits(["edit"])

const props = defineProps({
	instances: {
		type: Array as PropType<InstanceModule[]>,
		required: true,
	},
})

const components = {
	space: ModuleSpace,
	column: ModuleColumn,
	custom: ModuleCustom,
}

const onRemove = (instance: InstanceModule) => {
	useContentStore().removeInstance(instance)
}

const onEdit = (instance: InstanceModule) => {
	emits("edit", instance)
}
</script>