<template>
	<div class="bb-checkbox-input">
	  <label class="bb-checkbox-input__label">
		<input
		  type="checkbox"
		  :checked="modelValue"
		  :disabled="disabled"
		  class="bb-checkbox-input__checkbox"
		  @change="onChange"
		/>
		<span class="bb-checkbox-input__custom"></span>
		<span v-if="label" class="bb-checkbox-input__text">{{ label }}</span>
	  </label>
	  <p v-if="error" class="bb-checkbox-input__error">{{ error }}</p>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
	modelValue: { type: Boolean, default: false },
	label: { type: String, default: null },
	disabled: { type: Boolean, default: false },
	error: { type: String, default: null },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const onChange = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.checked);
  };
  </script>
  