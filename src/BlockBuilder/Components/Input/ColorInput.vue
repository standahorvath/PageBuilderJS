<template>
	<div class="bb-color-input">
	  <label v-if="label" class="bb-color-input__label">{{ label }}</label>
	  <ColorPicker
	  v-model:pureColor="color"
      :disabled="disabled"
	  format="rgb"
	  shape="square"
      class="bb-color-input__picker"
	  />
	  <p v-if="error" class="bb-color-input__error">{{ error }}</p>
	</div>
  </template>
<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const props = defineProps({
  modelValue: { type: String, default: "#000000" },
  label: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: null },
});

const emit = defineEmits(["update:modelValue"]);

const color = ref(props.modelValue);

watch(color, (newColor) => {
  emit("update:modelValue", newColor);
});

watch(() => props.modelValue, (newValue) => {
  color.value = newValue;
});
</script>