<template>
  <div class="bb-wysiwyg-input">
    <div class="bb-wysiwyg-toolbar">
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('paragraph') }" @click="() => editor?.chain().focus().setParagraph().run()"><DocumentTextIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }" @click="() => editor?.chain().focus().toggleHeading({ level: 1 }).run()">H1</button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }" @click="() => editor?.chain().focus().toggleHeading({ level: 2 }).run()">H2</button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('heading', { level: 3 }) }" @click="() => editor?.chain().focus().toggleHeading({ level: 3 }).run()">H3</button>

      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive({ textAlign: 'left' }) }" @click="() => editor?.chain().focus().setTextAlign('left').run()"><Bars3BottomLeftIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive({ textAlign: 'center' }) }" @click="() => editor?.chain().focus().setTextAlign('center').run()"><Bars3Icon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive({ textAlign: 'right' }) }" @click="() => editor?.chain().focus().setTextAlign('right').run()"><Bars3BottomRightIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('bold') }" @click="() => editor?.chain().focus().toggleBold().run()"><b>B</b></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('italic') }" @click="() => editor?.chain().focus().toggleItalic().run()"><i>I</i></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('underline') }" @click="() => editor?.chain().focus().toggleUnderline().run()"><u>U</u></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('strike') }" @click="() => editor?.chain().focus().toggleStrike().run()"><s>S</s></button>

      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('blockquote') }" @click="() => editor?.chain().focus().toggleBlockquote().run()"><ChatBubbleLeftIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('bulletList') }" @click="() => editor?.chain().focus().toggleBulletList().run()"><ListBulletIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('orderedList') }" @click="() => editor?.chain().focus().toggleOrderedList().run()"><NumberedListIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('codeBlock') }" @click="() => editor?.chain().focus().toggleCodeBlock().run()"><CodeBracketIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" @click="() => editor?.chain().focus().setHorizontalRule().run()"><MinusIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" @click="insertImage"><PhotoIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" @click="insertTable"><TableCellsIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" @click="deleteTable"><TrashIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" @click="insertYoutube"><PlayCircleIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" @click="clearContent"><XMarkIcon style="width: 16px" /></button>
    </div>

    <EditorContent class="bb-wysiwyg-editor" :editor="editor" />
  </div>
  
</template>

<script setup lang="ts">
import { watch, inject, Ref, onBeforeUnmount } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Image from '@tiptap/extension-image'
import { Table } from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import Youtube from '@tiptap/extension-youtube'
import { common, createLowlight } from 'lowlight'
const lowlight = createLowlight(common)
import { DocumentTextIcon, Bars3BottomLeftIcon, Bars3Icon, Bars3BottomRightIcon, ChatBubbleLeftIcon, ListBulletIcon, NumberedListIcon, CodeBracketIcon, MinusIcon, PhotoIcon, TableCellsIcon, TrashIcon, PlayCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{ modelValue: string }>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const uploader = inject<Ref<((cb: (img: string) => void) => void) | null>>('uploader')

const editor = useEditor({
  content: props.modelValue || '',
  extensions: [
    StarterKit.configure({
      codeBlock: false
    }),
    Heading,
    Underline,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Blockquote,
    CodeBlockLowlight.configure({ lowlight }),
    HorizontalRule,
    Image,
    Table.configure({ resizable: false }),
    TableRow,
    TableHeader,
    TableCell,
    Youtube.configure({ inline: false, modestBranding: true })
  ],
  onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    const out = editor.isEmpty ? '' : html
    emit('update:modelValue', out)
  }
})

function clearContent() {
  editor?.value?.chain().focus().clearContent(true).run()
}

function insertImage() {
  if (!editor?.value) return
  if (!uploader || !uploader.value) {
    const src = prompt('Image URL:')
    if (src) editor.value.chain().focus().setImage({ src }).run()
    return
  }
  uploader.value((img: string) => {
    editor.value?.chain().focus().setImage({ src: img }).run()
  })
}

function insertTable() {
  editor?.value?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
}

function deleteTable() {
  editor?.value?.chain().focus().deleteTable().run()
}

function insertYoutube() {
  const url = prompt('YouTube URL:')
  if (!url) return
  editor?.value?.chain().focus().setYoutubeVideo({ src: url }).run()
}

watch(() => props.modelValue, (value) => {
  if (!editor?.value) return
  const current = editor.value.getHTML()
  const normalizedCurrent = editor.value.isEmpty ? '' : current
  if (value !== normalizedCurrent) {
    if (value && value.length > 0) editor.value.commands.setContent(value, { emitUpdate: false })
    else editor.value.commands.clearContent(false)
  }
})

onBeforeUnmount(() => {
  editor?.value?.destroy()
})
</script>
