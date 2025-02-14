<template>
	<div class="bb-textarea-input">
	  <label v-if="label" class="bb-textarea-input__label">{{ label }}</label>
	  <textarea
		:value="modelValue"
		:placeholder="placeholder"
		:disabled="disabled"
		:rows="rows"
		class="bb-textarea-input__textarea"
		:class="{ 'bb-textarea-input__textarea--error': error }"
		@input="onInput"
	  ></textarea>
	  <p v-if="error" class="bb-textarea-input__error">{{ error }}</p>
	</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  defineProps({
	modelValue: { type: String, default: "" },
	label: { type: String, default: null },
	placeholder: { type: String, default: null },
	disabled: { type: Boolean, default: false },
	error: { type: String, default: null },
	rows: { type: Number, default: 2 },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const onInput = (event: Event) => {
	const target = event.target as HTMLTextAreaElement;
	emit("update:modelValue", target.value);
  };
  </script>
  