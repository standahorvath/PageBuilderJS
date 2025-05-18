<template>
	<div class="bb-repeater">
		<label v-if="label" class="bb-repeater__label">{{ label }}</label>

		<div class="bb-repeater__items">
			<div
				v-for="(item, index) in localValue"
				:key="index"
				class="bb-repeater__item"
			>

				<div class="bb-repeater__fields">
					<Attribute
						v-for="attribute in attributes"
						:key="attribute.id"
						:attribute="attribute"
						:data="{
							id: attribute.id,
							value: item[attribute.id] ?? attribute.value,
						}"
						@update:modelValue="(value) => (item[attribute.id] = value)"
					/>
				</div>
				<div class="bb-repeater__controls">
						<button class="bb-repeater__remove" @click="removeItem(index)" title="Remove">
							<IconCross />
						</button>
				</div>
			</div>
		</div>

		<button @click="addItem" class="bb-repeater__add">Add Item</button>

		<p v-if="error" class="bb-repeater__error">{{ error }}</p>
	</div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, reactive, watch } from 'vue'
import type { ModuleAttribute } from '@/types'
import Attribute from '../Modal/Common/Attribute.vue'
import IconCross from "@/BlockBuilder/Icons/Cross.vue";

const props = defineProps({
	modelValue: {
		type: Array as () => Record<string, any>[],
		required: true
	},
	label: {
		type: String,
		default: null
	},
	error: {
		type: String,
		default: null
	},
	disabled: {
		type: Boolean,
		default: false
	},
	attributes: {
		type: Array as () => ModuleAttribute[],
		required: true
	}
})

const emit = defineEmits(['update:modelValue'])
const localValue = reactive([...props.modelValue])

watch(
	() => localValue,
	(val) => {
		emit('update:modelValue', val)
	},
	{ deep: true }
)

function addItem() {
	const newItem: Record<string, any> = {}
	props.attributes.forEach(attr => {
		newItem[attr.id] = attr.value ?? ''
	})
	localValue.push(newItem)
}

function removeItem(index: number) {
	localValue.splice(index, 1)
}
</script>

