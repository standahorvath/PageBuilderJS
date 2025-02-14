<template>
	<div class="bb-select-input">
	  <label v-if="label" class="bb-select-input__label">{{ label }}</label>
	  <select
		:value="modelValue"
		:disabled="disabled"
		class="bb-select-input__select"
		:class="{ 'bb-select-input__select--error': error }"
		@change="onChange"
	  >
		<option v-if="placeholder" value="" disabled selected hidden>
		  {{ placeholder }}
		</option>
		<option v-for="(label, value) in options" :key="value" :value="value">
		  {{ label }}
		</option>
	  </select>
	  <p v-if="error" class="bb-select-input__error">{{ error }}</p>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
	modelValue: { type: String, default: "" },
	label: { type: String, default: null },
	placeholder: { type: String, default: null },
	disabled: { type: Boolean, default: false },
	error: { type: String, default: null },
	options: {
	  type: Object as () => Record<string, string>,
	  default: () => ({}),
	},
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const onChange = (event: Event) => {
	const target = event.target as HTMLSelectElement;
	emit("update:modelValue", target.value);
  };
  </script>
  