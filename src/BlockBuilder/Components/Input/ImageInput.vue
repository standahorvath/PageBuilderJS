<template>
  <div class="bb-image-input">
    <div v-if="modelValue" class="bb-image-input__preview">
      <img :src="modelValue" alt="Selected image" class="bb-image-input__image" />
      <button type="button" @click="resetImage" class="bb-button">Reset</button>
    </div>

    <div v-else>
      <button type="button" @click="uploadImage" class="bb-button">Upload Image</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, inject, Ref } from 'vue'

defineProps<{
  modelValue: string | null
}>()

const uploader = inject<Ref<((cb: (img: string) => void) => void) | null>>('uploader')

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

function uploadImage() {
  if (!uploader || !uploader.value) {
    console.warn('Uploader function is not provided.')
    return
  }
  uploader.value((img: string) => {
    emit('update:modelValue', img)
  })
}

function resetImage() {
  emit('update:modelValue', null)
}
</script>
