<template>
	<div class="bb-content">

		<EmptyContent v-if="!instances.length" />
		<component 
			v-for="instance in instances" 
			:key="instance.nonce"
			:is="components[instance.id as keyof typeof components]" 
			:data="instance.structureData"
			@remove="onRemove(instance)"
			@edit="onEdit(instance)"
		>
			<component 
				v-if="instance.children" 
				v-for="child in instance.children" 
				:key="child.nonce"
				:is="components[child.id as keyof typeof components]" 
				:data="child.structureData"
			>
			</component>
		</component>
	</div>
</template>
<script setup lang="ts">
import ModuleColumn from "@/BlockBuilder/Components/Modules/Column.vue";
import ModuleSpace from "@/BlockBuilder/Components/Modules/Space.vue";
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
}

const onRemove = (instance: InstanceModule) => {
	useContentStore().removeInstance(instance)
}

const onEdit = (instance: InstanceModule) => {
	emits("edit", instance)
}
</script>