<template>
  <div class="bb-wysiwyg-input">
    <div class="bb-wysiwyg-toolbar">
      <button class="bb-wysiwyg-button" @click="exec('bold')"><b>B</b></button>
      <button class="bb-wysiwyg-button" @click="exec('italic')"><i>I</i></button>
      <button class="bb-wysiwyg-button" @click="exec('underline')"><u>U</u></button>
      <button class="bb-wysiwyg-button" @click="exec('formatBlock', '<h1>')">H1</button>
      <button class="bb-wysiwyg-button" @click="exec('formatBlock', '<h2>')">H2</button>
      <button class="bb-wysiwyg-button" @click="exec('insertUnorderedList')"><ListBulletIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" @click="exec('insertOrderedList')"><NumberedListIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" @click="createLink()"><PaperClipIcon style="width: 16px;" /></button>
      <button class="bb-wysiwyg-button" @click="exec('justifyLeft')"><Bars3BottomLeftIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" @click="exec('justifyCenter')"><Bars3Icon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" @click="exec('justifyRight')"><Bars3BottomRightIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" @click="exec('undo')">↶</button>
      <button class="bb-wysiwyg-button" @click="exec('redo')">↷</button>
      <button class="bb-wysiwyg-button" @click="clearContent()"><TrashIcon style="width: 16px" /></button>
    </div>

    <div
      ref="editor"
      class="bb-wysiwyg-editor"
      contenteditable="true"
      spellcheck="false"
      @input="updateValue"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Bars3BottomLeftIcon, Bars3Icon, Bars3BottomRightIcon, PaperClipIcon, TrashIcon, NumberedListIcon, ListBulletIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editor = ref<HTMLDivElement | null>(null)
const inputValue = ref('')

function exec(command: string, value: string | null = null) {
  document.execCommand(command, false, value || undefined)
  updateValue()
}

function updateValue() {
  if (editor.value) {
    inputValue.value = editor.value.innerHTML
    emit('update:modelValue', inputValue.value)
  }
}

function createLink() {
  const url = prompt('Enter the URL:')
  if (url) exec('createLink', url)
}

function clearContent() {
  if (editor.value) {
    editor.value.innerHTML = ''
    updateValue()
  }
}

watch(() => props.modelValue, (newValue) => {
  const isFocused = document.activeElement === editor.value
  if (!isFocused && newValue !== inputValue.value) {
    inputValue.value = newValue
    if (editor.value) {
      editor.value.innerHTML = newValue
    }
  }
})

onMounted(() => {
  inputValue.value = props.modelValue
  if (editor.value) {
    editor.value.innerHTML = props.modelValue
  }
})
</script>
