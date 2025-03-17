<template>
	<div class="bb-attribute">
		<div class="bb-attribute__label">
			{{ attribute.name }}
		</div>
		<div class="bb-attribute__content">
			<component :is="inputComponent" v-model="data.value" :options="attribute.options" v-if="data" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ModuleAttribute, AttributeData } from "@/types";
import { defineProps, PropType, computed } from "vue";
import TextInput from "@/BlockBuilder/Components/Input/TextInput.vue";
import SelectInput from "@/BlockBuilder/Components/Input/SelectInput.vue";
import NumberInput from "@/BlockBuilder/Components/Input/NumberInput.vue";
import TextareaInput from "@/BlockBuilder/Components/Input/TextareaInput.vue";
import CheckboxInput from "@/BlockBuilder/Components/Input/CheckboxInput.vue";
import DateTimeInput from "@/BlockBuilder/Components/Input/DateTimeInput.vue";
import ColorInput from "@/BlockBuilder/Components/Input/ColorInput.vue";
import LinkInput from "@/BlockBuilder/Components/Input/LinkInput.vue";

const props = defineProps({
	attribute: {
		type: Object as PropType<ModuleAttribute>,
		required: true,
	},
	data: {
		type: Object as PropType<AttributeData | null>,
		required: true,
	}
});

const inputComponent = computed(() => {
	switch (props.attribute.type) {
		case 'text':
			return TextInput;
		case 'select':
			return SelectInput;
		case 'number':
			return NumberInput;
		case 'textarea':
			return TextareaInput;
		case 'checkbox':
			return CheckboxInput;
		case 'datetime':
			return DateTimeInput;
		case 'color':
			return ColorInput;
		case 'link':
			return LinkInput;
		default:
			return TextInput; 
	}
});
</script>