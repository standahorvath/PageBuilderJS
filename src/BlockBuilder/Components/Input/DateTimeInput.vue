<template>
	<div class="bb-datetime-input">
	  <label v-if="label" class="bb-datetime-input__label">{{ label }}</label>
	  <input
		type="datetime-local"
		:value="modelValue"
		:placeholder="placeholder"
		:disabled="disabled"
		class="bb-datetime-input__input"
		:class="{ 'bb-datetime-input__input--error': error }"
		@input="onInput"
	  />
	  <p v-if="error" class="bb-datetime-input__error">{{ error }}</p>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
	modelValue: { type: String, default: "" },
	label: { type: String, default: null },
	placeholder: { type: String, default: "" },
	disabled: { type: Boolean, default: false },
	error: { type: String, default: null },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const onInput = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.value);
  };
  </script>
  