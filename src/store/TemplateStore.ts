import { defineStore } from 'pinia'
import type { Template } from '../types'

export const useTemplateStore = defineStore('template', {
	state: () => ({
		templates: [] as Template[],
	}),
	getters: {
	},
	actions: {
		deleteTemplate(name: string) {
			this.templates = this.templates.filter((template) => template.name !== name)
		},
		getTemplate(name: string): Template | undefined {
			return this.templates.find((template) => template.name === name)
		},
	}
})