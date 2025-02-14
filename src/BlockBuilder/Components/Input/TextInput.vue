<template>
	<div class="bb-text-input">
	  <label v-if="label" class="bb-text-input__label">{{ label }}</label>
	  <input
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
import { defineProps, defineEmits } from "vue";

defineProps({
	modelValue: { 
		type: String, 
		required: true 
	},
	label: { 
		type: String, 
		default: null 
	},
	placeholder: { 
		type: String, 
		default: null 
	},
	disabled: { 
		type: Boolean, 
		default: false 
	},
	error: { 
		type: String, 
		default: null 
	},
	required: { 
		type: Boolean, 
		default: false 
	},
	maxlength: { 
		type: Number 
	},
	readonly: { 
		type: Boolean, 
		default: false 
	}
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
	emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>