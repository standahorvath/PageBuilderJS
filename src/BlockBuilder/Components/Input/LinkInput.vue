<template>
	<div class="bb-text-input">
		<label v-if="label" class="bb-text-input__label">{{ label }}</label>

		<select class="bb-select-input__select" :value="model.category" @change="onSelectCategory"  v-if="links && links.length > 0">
			<option v-for="category in linksWithManual" :key="category.value" :value="category.value">
				{{ category.label }}
			</option>
		</select>

		<input
			v-if="model.category === 'manual' || !links || links.length === 0"
			type="url"
			:disabled="disabled"
			class="bb-text-input__input"
			:class="{ 'bb-text-input__input--error': error }"
			placeholder="Enter URL"
			:value="manualUrl"
			@input="onManualInput"
		/>

		<input
			v-if="model.category === 'manual' || !links || links.length === 0"
			type="text"
			:disabled="disabled"
			class="bb-text-input__input"
			placeholder="Enter label"
			:value="manualLabel"
			@input="onManualLabelInput"
		/>

		<select
			v-else
			class="bb-select-input__select"
			:value="selectedLink"
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
const links = inject<InputLinkCategory[]>('links', [])

const model = computed(() => props.modelValue)

onMounted(() => {
	if (!model.value) {
		emit('update:modelValue', {
			category: 'manual',
			url: '',
			label: '',
			openInNewWindow: false
		} as InputLinkModelManual)
	}
})

const linksWithManual = computed(() => {
	return [{ value: 'manual', label: 'Manual Input' } as { value: string; label: string }, ...links]
})

const selectedCategoryLinks = computed(() => {
	const category = linksWithManual?.value.find((c) => c.value === model.value.category)
	return (category && (category as InputLinkCategory).links) ? (category as InputLinkCategory).links : []
})

const onSelectCategory = (e: Event) => {
	const value = (e.target as HTMLSelectElement).value
	if (value === 'manual') {
		emit('update:modelValue', {
			category: 'manual',
			url: '',
			label: '',
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

const manualUrl = computed(() => (model.value as InputLinkModelManual).url || '')
const manualLabel = computed(() => ((model.value as InputLinkModelManual).label) || '')
const selectedLink = computed(() => (model.value as any).link || '')

const onManualInput = (e: Event) => {
	const url = (e.target as HTMLInputElement).value
	if (model.value.category === 'manual') {
		emit('update:modelValue', {
			...model.value,
			url
		} as InputLinkModelManual)
	}
}

const onManualLabelInput = (e: Event) => {
	const label = (e.target as HTMLInputElement).value
	if (model.value.category === 'manual') {
		emit('update:modelValue', {
			...model.value,
			label
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
