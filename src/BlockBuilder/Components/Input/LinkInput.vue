<template>
	<div class="bb-text-input">
		<label v-if="label" class="bb-text-input__label">{{ label }}</label>

		<select class="bb-select-input__select" :value="model.category" @change="onSelectCategory"  v-if="categories && categories.length > 0">
			<option v-for="category in categoriesWithManual" :key="category.value" :value="category.value">
				{{ category.label }}
			</option>
		</select>

		<input
			v-if="model.category === 'manual' || !categories || categories.length === 0"
			type="url"
			:disabled="disabled"
			class="bb-text-input__input"
			:class="{ 'bb-text-input__input--error': error }"
			placeholder="Enter URL"
			:value="model.url"
			@input="onManualInput"
		/>

		<select
			v-else
			class="bb-select-input__select"
			:value="model.link"
			@change="onSelectLink"
		>
			<option value="" disabled hidden>{{ 'Select option' }}</option>
			<option
				v-for="item in selectedCategoryLinks"
				:key="item.value"
				:value="item.value"
			>
				{{ item.label }}
			</option>
		</select>

		<select class="bb-select-input__select" :value="model.openInNewWindow ? 'new' : 'same'" @change="onSelectOpenInNewWindow">
			<option value="same">Open in same window</option>
			<option value="new">Open in new window</option>
		</select>

		<p v-if="error" class="bb-text-input__error">{{ error }}</p>
	</div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import type { InputLinkCategory, InputLinkModel, InputLinkModelManual } from '@/types'

const props = defineProps<{
	label?: string
	modelValue: InputLinkModel
	disabled?: boolean
	error?: string
}>()

const emit = defineEmits<{
	(e: 'update:modelValue', value: InputLinkModel): void
}>()
const categories = inject<InputLinkCategory[]>('categories', [])

const model = computed(() => props.modelValue)

onMounted(() => {
	if (!model.value) {
		emit('update:modelValue', {
			category: 'manual',
			url: '',
			openInNewWindow: false
		} as InputLinkModelManual)
	}
})

const categoriesWithManual = computed(() => {
	return [{ value: 'manual', label: 'Manual Input' }, ...categories]
})

const selectedCategoryLinks = computed(() => {
	const category = categoriesWithManual?.value.find((c) => c.value === model.value.category)
	return category?.links ?? []
})

const onSelectCategory = (e: Event) => {
	const value = (e.target as HTMLSelectElement).value
	if (value === 'manual') {
		emit('update:modelValue', {
			category: 'manual',
			url: '',
			openInNewWindow: false
		})
	} else {
		emit('update:modelValue', {
			category: value,
			link: '',
			openInNewWindow: false
		})
	}
}

const onManualInput = (e: Event) => {
	const url = (e.target as HTMLInputElement).value
	if (model.value.category === 'manual') {
		emit('update:modelValue', {
			...model.value,
			url
		} as InputLinkModelManual)
	}
}

const onSelectLink = (e: Event) => {
	const link = (e.target as HTMLSelectElement).value
	if (model.value.category !== 'manual') {
		emit('update:modelValue', {
			...model.value,
			link
		})
	}
}

const onSelectOpenInNewWindow = (e: Event) => {
	const openInNewWindow = (e.target as HTMLSelectElement).value === 'new'
	emit('update:modelValue', {
		...model.value,
		openInNewWindow
	})
}
</script>
