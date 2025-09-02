<template>
  <div ref="host"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
type ShadowMode = 'open' | 'closed'

const props = withDefaults(defineProps<{
  /** HTML string to render inside shadow root */
  html: string
  /** Optional CSS string scoped to the shadow root */
  css?: string
  /** Optional CSS link to include in the shadow root */
  stylesheet?: string
  /** Shadow root mode */
  mode?: ShadowMode
  /** delegatesFocus option for attachShadow */
  delegatesFocus?: boolean
}>(), {
  html: '',
  css: '',
  stylesheet: '',
  mode: 'open',
  delegatesFocus: false,
})

const host = ref<HTMLDivElement | null>(null)
let shadow: ShadowRoot | null = null
/** Render current props.html + props.css into the shadow root */
function renderIntoShadow() {
  if (!shadow) return
  const styleBlock = props.css ? `<style>${props.css}</style>` : ''
  const linkBlock = props.stylesheet ? `<link rel="stylesheet" href="${props.stylesheet}">` : ''
  shadow.innerHTML = `${linkBlock}${styleBlock}${props.html}`
}

onMounted(() => {
  if (!host.value) return
  shadow = host.value.attachShadow({
    mode: props.mode,
    delegatesFocus: props.delegatesFocus,
  })
  renderIntoShadow()
})

onBeforeUnmount(() => {
  if (shadow) {
    shadow.innerHTML = ''
    shadow = null
  }
})

watch(() => [props.html, props.css], () => {
  renderIntoShadow()
})
</script>
