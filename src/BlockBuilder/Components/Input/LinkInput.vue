<template>
	<div class="bb-text-input">
	  <label v-if="label" class="bb-text-input__label">{{ label }}</label>
	  <input
		type="url"
		:value="modelValue"
		:placeholder="placeholder"
		:disabled="disabled"
		class="bb-text-input__input"
		:class="{ 'bb-text-input__input--error': error }"
		@input="onInput"
	  />
	  <p v-if="error" class="bb-text-input__error">{{ error }}</p>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
	label: { type: String, default: null },
	modelValue: { type: String, default: '' },
	placeholder: { type: String, default: '' },
	disabled: { type: Boolean, default: false },
	error: { type: String, default: null },
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const onInput = (event: Event) => {
	const inputElement = event.target as HTMLInputElement;
	emit('update:modelValue', inputElement.value);
  };

  </script>
  