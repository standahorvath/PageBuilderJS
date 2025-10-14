<template>
  <div class="bb-repeater">
    <label v-if="label" class="bb-repeater__label">{{ label }}</label>

    <Draggable
      :list="localValue"
      item-key="__bbKey"
      :animation="200"
      handle=".bb-repeater__drag"
      ghost-class="drag-ghost"
      chosen-class="drag-chosen"
      drag-class="drag-drag"
	  :group="dragGroup"
	  @end="onLocalValueChange"
      class="bb-repeater__items"
    >
      <template #item="{ element: item, index }">
        <div class="bb-repeater__item">
			<div class="bb-repeater__drag-container">
			<button class="bb-repeater__drag" type="button" title="Drag to reorder" :disabled="disabled">
              <Sort />
            </button>
			</div>
          <div class="bb-repeater__fields">
            <Attribute
              v-for="attribute in attributes"
              :key="attribute.id"
              :attribute="attribute"
              :data="{
                id: attribute.id,
                value: item[attribute.id] ?? attribute.value,
              }"
              :disabled="disabled"
              @update:modelValue="(value) => (item[attribute.id] = value)"
            />
          </div>
          <div class="bb-repeater__controls">
            <button class="bb-repeater__remove" @click="confirmRemove(index)" title="Remove" :disabled="disabled">
              <IconCross />
            </button>
          </div>
        </div>
      </template>
    </Draggable>

    <button @click="addItem" class="bb-repeater__add" :disabled="disabled">Add Item</button>

    <p v-if="error" class="bb-repeater__error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps, PropType } from 'vue'
import type { ModuleAttribute } from '@/types'
import Attribute from '../Modal/Common/Attribute.vue'
import IconCross from '@/BlockBuilder/Icons/Cross.vue'
import Draggable from 'vuedraggable'
import Sort from '@/BlockBuilder/Icons/Sort.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: {
    type: Array as PropType<Record<string, any>[]>,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  error: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  attributes: {
    type: Array as PropType<ModuleAttribute[]>,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
const localValue = ref<Record<string, any>[]>([])

const dragGroupName = `bb-repeater-${crypto.randomUUID()}`
const dragGroup = { name: dragGroupName, pull: false, put: false }

function assignKey(item: Record<string, any>) {
  if ('__bbKey' in item) return
  Object.defineProperty(item, '__bbKey', {
    value: crypto.randomUUID(),
    enumerable: false,
    writable: false,
    configurable: false,
  })
}


watch(
  () => props.modelValue,
  (val) => {
    if (!Array.isArray(val)) return
    const withKeys = val.map((item, index) => {
      const existing = localValue.value[index]
      if (existing && '__bbKey' in existing) {
        Object.defineProperty(item, '__bbKey', {
          value: existing.__bbKey,
          enumerable: false,
          writable: false,
          configurable: false,
        })
      } else {
        assignKey(item)
      }
      return item
    })
    localValue.value = [...withKeys]
  },
  { deep: true, immediate: true }
)


const onLocalValueChange = () => {
      const sanitized = localValue.value.map((item) => {
      const clone: Record<string, any> = {}
      for (const key in item) {
        if (key === '__bbKey') continue
        clone[key] = item[key]
      }
      return clone
    })
    emit('update:modelValue', sanitized)
}

function addItem() {
  const newItem: Record<string, any> = {}
  props.attributes.forEach(attr => {
    newItem[attr.id] = attr.value ?? ''
  })
  assignKey(newItem)
  localValue.value.push(newItem)
}

function confirmRemove(index: number) {
  if (confirm('Are you sure you want to remove this item?')) {
    removeItem(index)
  }
}

function removeItem(index: number) {
  localValue.value.splice(index, 1)
}
</script>
