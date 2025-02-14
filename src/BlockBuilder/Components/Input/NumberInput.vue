<template>
	<div class="bb-number-input">
	  <label v-if="label" class="bb-number-input__label">{{ label }}</label>
	  <input
		type="number"
		:value="modelValue"
		:placeholder="placeholder"
		:disabled="disabled"
		:min="min"
		:max="max"
		:step="step"
		class="bb-number-input__input"
		:class="{ 'bb-number-input__input--error': error }"
		@input="onInput"
	  />
	  <p v-if="error" class="bb-number-input__error">{{ error }}</p>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
	modelValue: { type: Number, default: null },
	label: { type: String, default: null },
	placeholder: { type: String, default: null },
	disabled: { type: Boolean, default: false },
	error: { type: String, default: null },
	min: { type: Number, default: null },
	max: { type: Number, default: null },
	step: { type: Number, default: 1 },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const onInput = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.value ? Number(target.value) : null);
  };
  </script>
  