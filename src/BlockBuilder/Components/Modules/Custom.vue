<template>
	<div class="bb-module">
	<ModuleHeader :title="module.title" :icon="module.icon" @remove="onRemove" @edit="onEdit" @duplicate="onDuplicate" />
	<ModuleContent class="bb-min-h-0">
		<div class="bb-module__custom">
			<ShadowDom :html="moduleContent" :stylesheet="stylesheet" />
		</div>
	</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import ShadowDom from "@/BlockBuilder/Components/Modules/Common/ShadowDom.vue";
import { computed, inject, PropType } from "vue";
import { AttributeData, InstanceModule, Module, ModuleTab } from "@/types";
import { Templify } from 'templify-js';

const emits = defineEmits(["remove", "edit", "duplicate"]);
const props = defineProps({
	data: {
		type: Array as PropType<AttributeData[]>,
		default: () => [],
	},
	module: {
		type: Object as PropType<Module>,
		required: true,
	},
})

const stylesheet = inject('stylesheet') as string | undefined

const moduleContent = computed(() => {
	if(!props.module.render) return props.module.title
	let content = props.module.render
	if (typeof content !== "string") {
		return ''
	}
	const templify = new Templify(content);

	// Get options from module structure and selected option
	// This helps show the selected options in the render preview of module
	// Example:
	// menu_options = { "option1": "Option 1", "option2": "Option 2" }
	// menu_selected = "Option 1"
	const options = props.module.structure?.tabs?.reduce((acc, tab: ModuleTab) => {
		tab.sections?.forEach(section => {
			section.attributes?.forEach(attribute => {
				if (attribute.options && attribute.id) {
					acc[`${attribute.id}_options`] = attribute.options;
					const dataAttribute = props.data.find(item => item.id === attribute.id);
					if(props.data && attribute.id && dataAttribute && typeof attribute.options[dataAttribute.value] !== 'undefined') {
						acc[`${attribute.id}_selected`] = attribute.options[dataAttribute.value];
					}
				}
			});
		});
		return acc;
	}, {} as Record<string, any>) || {};

	return templify.render({
		...props.data.reduce((acc, item) => {
			acc[item.id] = item.value
			return acc
		}, {} as Record<string, any>), 
		...options
	});

})

const onRemove = () => {
	emits("remove");
}
const onEdit = () => {
	emits("edit");
}
const onDuplicate = () => {
	emits("duplicate");
}

</script>