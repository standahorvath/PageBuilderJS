<template>
	<div class="bb-attribute">
		<div class="bb-attribute__label">
			{{ attribute.name }}
		</div>
		<div class="bb-attribute__content">
			<LinkInput v-model="attribute.value" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { ModuleAttribute } from "@/types";
import { defineProps, PropType } from "vue";
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
})
</script>