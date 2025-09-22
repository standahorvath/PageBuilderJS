<template>
  <div class="bb-wysiwyg-input">
    <div class="bb-wysiwyg-toolbar">
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('paragraph') }" title="Paragraph" @click="() => editor?.chain().focus().setParagraph().run()"><DocumentTextIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }" title="Heading 1" @click="() => editor?.chain().focus().toggleHeading({ level: 1 }).run()">H1</button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }" title="Heading 2" @click="() => editor?.chain().focus().toggleHeading({ level: 2 }).run()">H2</button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('heading', { level: 3 }) }" title="Heading 3" @click="() => editor?.chain().focus().toggleHeading({ level: 3 }).run()">H3</button>
      |
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive({ textAlign: 'left' }) }" title="Align left" @click="() => editor?.chain().focus().setTextAlign('left').run()"><Bars3BottomLeftIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive({ textAlign: 'center' }) }" title="Align center" @click="() => editor?.chain().focus().setTextAlign('center').run()"><Bars3Icon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive({ textAlign: 'right' }) }" title="Align right" @click="() => editor?.chain().focus().setTextAlign('right').run()"><Bars3BottomRightIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('bold') }" title="Bold" @click="() => editor?.chain().focus().toggleBold().run()"><b>B</b></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('italic') }" title="Italic" @click="() => editor?.chain().focus().toggleItalic().run()"><i>I</i></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('underline') }" title="Underline" @click="() => editor?.chain().focus().toggleUnderline().run()"><u>U</u></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('strike') }" title="Strikethrough" @click="() => editor?.chain().focus().toggleStrike().run()"><s>S</s></button>

      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('blockquote') }" title="Blockquote" @click="() => editor?.chain().focus().toggleBlockquote().run()"><ChatBubbleLeftIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('bulletList') }" title="Bullet list" @click="() => editor?.chain().focus().toggleBulletList().run()"><ListBulletIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('orderedList') }" title="Ordered list" @click="() => editor?.chain().focus().toggleOrderedList().run()"><NumberedListIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" :class="{ 'is-active': editor?.isActive('codeBlock') }" title="Code block" @click="() => editor?.chain().focus().toggleCodeBlock().run()"><CodeBracketIcon style="width: 16px" /></button>
      <button class="bb-wysiwyg-button" title="Horizontal rule" @click="() => editor?.chain().focus().setHorizontalRule().run()"><MinusIcon style="width: 16px" /></button>

      <div class="bb-wysiwyg-dropdown-wrapper">
        <button class="bb-wysiwyg-button" title="Link actions" @click.stop="toggleLinkMenu"><LinkIcon style="width: 16px" /></button>
        <div v-if="showLinkMenu" class="bb-wysiwyg-dropdown" @click.stop>
          <button class="bb-wysiwyg-button" @click="openLinkModal">Insert/edit link</button>
          <button class="bb-wysiwyg-button" @click="unsetLink">Remove link</button>
        </div>
      </div>

      <button class="bb-wysiwyg-button" title="Insert image" @click="insertImage"><PhotoIcon style="width: 16px" /></button>

      <div class="bb-wysiwyg-dropdown-wrapper">
        <button class="bb-wysiwyg-button" title="Table actions" @click.stop="toggleTableMenu"><TableCellsIcon style="width: 16px" /></button>
        <div v-if="showTableMenu" class="bb-wysiwyg-dropdown" @click.stop>
          <button class="bb-wysiwyg-button" @click="insertTable">Insert table</button>
          <button class="bb-wysiwyg-button" @click="addRowBefore">Add row before</button>
          <button class="bb-wysiwyg-button" @click="addRowAfter">Add row after</button>
          <button class="bb-wysiwyg-button" @click="deleteRow">Delete row</button>
          <hr class="bb-wysiwyg-dropdown__divider" />
          <button class="bb-wysiwyg-button" @click="addColumnBefore">Add column before</button>
          <button class="bb-wysiwyg-button" @click="addColumnAfter">Add column after</button>
          <button class="bb-wysiwyg-button" @click="deleteColumn">Delete column</button>
          <hr class="bb-wysiwyg-dropdown__divider" />
          <button class="bb-wysiwyg-button" @click="deleteTable">Delete table</button>
        </div>
      </div>

      <button class="bb-wysiwyg-button" title="Insert YouTube" @click="insertYoutube"><PlayCircleIcon style="width: 16px" /></button>

      <button class="bb-wysiwyg-button" title="Clear content" @click="clearContent"><XMarkIcon style="width: 16px" /></button>
    </div>

    <EditorContent class="bb-wysiwyg-editor" :editor="editor" @click="onEditorClick" @mousedown="onEditorMouseDown" />

    <div v-if="showLinkModal" class="bb-wysiwyg-link-modal bb-wysiwyg-modal" @click="closeLinkModal">
      <div class="bb-wysiwyg-modal__content" @click.stop>
        <div class="bb-wysiwyg-link-modal__header">Insert Link</div>
        <div class="bb-wysiwyg-link-modal__body">
          <label class="bb-wysiwyg-link-modal__label">URL</label>
          <input class="bb-wysiwyg-link-modal__input bb-text-input__input" type="text" v-model="linkUrl" placeholder="https://example.com" />
          <label class="bb-wysiwyg-link-modal__checkbox">
            <input type="checkbox" v-model="linkTargetBlank" />
            <span>Open in new window</span>
          </label>
        </div>
        <div class="bb-wysiwyg-link-modal__footer">
          <button class="bb-button" @click="confirmLink">Insert</button>
          <button class="bb-button bb-button--secondary" @click="closeLinkModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { watch, inject, Ref, onBeforeUnmount, ref, onMounted } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'
import Blockquote from '@tiptap/extension-blockquote'
import Link from '@tiptap/extension-link'
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
import { DocumentTextIcon, Bars3BottomLeftIcon, Bars3Icon, Bars3BottomRightIcon, ChatBubbleLeftIcon, ListBulletIcon, NumberedListIcon, CodeBracketIcon, MinusIcon, PhotoIcon, TableCellsIcon, TrashIcon, PlayCircleIcon, XMarkIcon, LinkIcon, PlusIcon, ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{ modelValue: string }>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const uploader = inject<Ref<((cb: (img: string) => void) => void) | null>>('uploader')
const showTableMenu = ref(false)
const showLinkModal = ref(false)
const showLinkMenu = ref(false)
const linkUrl = ref('')
const linkTargetBlank = ref(true)

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
    Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' } }),
    CodeBlockLowlight.configure({ lowlight }),
    HorizontalRule,
    Image,
    Table.configure({ resizable: false }),
    TableRow,
    TableHeader,
    TableCell,
    Youtube.configure({ inline: false, modestBranding: true })
  ],
  editorProps: {
    handleClick(view, pos, event) {
      const target = event.target as HTMLElement
      if (target && target.closest('a[href]')) {
        event.preventDefault()
        return true
      }
      return false
    },
    handleDOMEvents: {
      click: (view, event) => {
        const target = (event.target as HTMLElement)
        if (target && target.closest('a[href]')) {
          event.preventDefault()
          return true
        }
        return false
      },
      mousedown: (view, event) => {
        const target = (event.target as HTMLElement)
        if (target && target.closest('a[href]')) {
          event.preventDefault()
          return false
        }
        return false
      }
    }
  },
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
  showTableMenu.value = false
}

function deleteTable() {
  editor?.value?.chain().focus().deleteTable().run()
  showTableMenu.value = false
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

function toggleTableMenu() {
  showTableMenu.value = !showTableMenu.value
}

function openLinkModal() {
  showLinkMenu.value = false
  const prev = editor?.value?.getAttributes('link')?.href || ''
  linkUrl.value = prev
  const prevTarget = editor?.value?.getAttributes('link')?.target
  linkTargetBlank.value = prevTarget === '_blank' || prevTarget === undefined
  showLinkModal.value = true
}

function closeLinkModal() {
  showLinkModal.value = false
}

function confirmLink() {
  if (!editor?.value) return
  if (!linkUrl.value) {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    showLinkModal.value = false
    return
  }
  const attrs = { href: linkUrl.value, target: linkTargetBlank.value ? '_blank' : undefined, rel: linkTargetBlank.value ? 'noopener noreferrer' : undefined }
  editor.value.chain().focus().extendMarkRange('link').setLink(attrs).run()
  showLinkModal.value = false
}

function unsetLink() {
  editor?.value?.chain().focus().unsetLink().run()
  showLinkMenu.value = false
}

function toggleLinkMenu() {
  showLinkMenu.value = !showLinkMenu.value
}

function addRowBefore() {
  editor?.value?.chain().focus().addRowBefore().run()
  showTableMenu.value = false
}

function addRowAfter() {
  editor?.value?.chain().focus().addRowAfter().run()
  showTableMenu.value = false
}

function deleteRow() {
  editor?.value?.chain().focus().deleteRow().run()
  showTableMenu.value = false
}

function addColumnBefore() {
  editor?.value?.chain().focus().addColumnBefore().run()
  showTableMenu.value = false
}

function addColumnAfter() {
  editor?.value?.chain().focus().addColumnAfter().run()
  showTableMenu.value = false
}

function deleteColumn() {
  editor?.value?.chain().focus().deleteColumn().run()
  showTableMenu.value = false
}

function onEditorClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target && (target.closest('a[href]'))) {
    e.preventDefault()
  }
}

function onEditorMouseDown(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target && (target.closest('a[href]'))) {
    // prevent browser from starting navigation before TipTap selection
    e.preventDefault()
  }
}
</script>