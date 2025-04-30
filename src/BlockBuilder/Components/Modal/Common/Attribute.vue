<template>
	<div class="bb-attribute">
		<div class="bb-attribute__label">
			{{ attribute.name }}
		</div>
		<div class="bb-attribute__content">
			<component :is="components[attribute.type]" v-model="value" v-if="components[attribute.type]" :options="attribute.options" />
			<span v-else>Undefined attribute type</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ModuleAttribute, AttributeData } from "@/types";
import { defineProps, PropType, computed, ref, watch } from "vue";
import TextInput from "@/BlockBuilder/Components/Input/TextInput.vue";
import SelectInput from "@/BlockBuilder/Components/Input/SelectInput.vue";
import NumberInput from "@/BlockBuilder/Components/Input/NumberInput.vue";
import TextareaInput from "@/BlockBuilder/Components/Input/TextareaInput.vue";
import CheckboxInput from "@/BlockBuilder/Components/Input/CheckboxInput.vue";
import DateTimeInput from "@/BlockBuilder/Components/Input/DateTimeInput.vue";
import ColorInput from "@/BlockBuilder/Components/Input/ColorInput.vue";
import LinkInput from "@/BlockBuilder/Components/Input/LinkInput.vue";
import { SectionAttributeType } from "@/enums";

const emits = defineEmits(["update:modelValue"])

const props = defineProps({
	attribute: {
		type: Object as PropType<ModuleAttribute>,
		required: true,
	},
	data: {
		type: Object as PropType<AttributeData>,
		required: true,
	},
})

const defaultValue = computed(() => {
	if (props.data) {
		return props.data.value
	}
	return props.attribute.value ?? false
})

const value = ref<any>(defaultValue.value)

watch(() => value.value, (newValue) => {
	emits("update:modelValue", newValue)
})

const components = {
	[SectionAttributeType.Text]: TextInput,
	[SectionAttributeType.Select]: SelectInput,
	[SectionAttributeType.Number]: NumberInput,
	[SectionAttributeType.Textarea]: TextareaInput,
	[SectionAttributeType.Checkbox]: CheckboxInput,
	[SectionAttributeType.DateTime]: DateTimeInput,
	[SectionAttributeType.Color]: ColorInput,
	[SectionAttributeType.Link]: LinkInput,
} as Record<SectionAttributeType, any>
</script>