<template>
  <div class="bb-code-input">
    <pre :class="'language-' + options.language">
      <code
        ref="codeElement"
        class="code-editable"
        contenteditable="true"
        spellcheck="false"
        @input="onInput"
        @blur="highlight"
      ></code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import Prism from 'prismjs'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-tomorrow.css'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
	type: Object,
	default: () => ({
		language: 'css',
	}),
	validator: (value: Record<string, any>) => {
	  return Object.keys(value).every(key => ['language'].includes(key))
	},
  }
})

const emit = defineEmits(['update:modelValue'])
const codeElement = ref<HTMLElement | null>(null)

function highlight() {
  if (codeElement.value) {
    const content = codeElement.value.innerText
    const html = Prism.highlight(content, Prism.languages[props.options.language] || Prism.languages.javascript, props.options.language)
    codeElement.value.innerHTML = html
    placeCaretAtEnd(codeElement.value)
  }
}

function onInput() {
  if (codeElement.value) {
    const content = codeElement.value.innerText
    emit('update:modelValue', content)
  }
}

function placeCaretAtEnd(el: HTMLElement) {
  const range = document.createRange()
  const sel = window.getSelection()
  range.selectNodeContents(el)
  range.collapse(false)
  sel?.removeAllRanges()
  sel?.addRange(range)
}

onMounted(() => {
  nextTick(() => {
    if (codeElement.value) {
      codeElement.value.innerText = props.modelValue
      highlight()
    }
  })
})

watch(() => props.modelValue, (newVal) => {
  if (codeElement.value && codeElement.value.innerText !== newVal) {
    codeElement.value.innerText = newVal
    highlight()
  }
})
</script>

<style scoped>
</style>
