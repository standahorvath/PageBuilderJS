import { deepCopy, findParent } from '@/BlockBuilder/Utils/ContentUtils'
import { ModuleInstanceId } from '@/enums/modules/Module'
import { getDefaultData } from '@/helpers/Module'
import { ModuleData, InstanceModule, Module } from '@/types'
import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
	state: () => ({
		instances: [] as InstanceModule[],
	}),
	getters: {
		getBuildInComponentIds() {
			return Object.keys(ModuleInstanceId).map((key) => ModuleInstanceId[key as keyof typeof ModuleInstanceId])
		},
		export(): ModuleData[] {
			const exportInstance = (instance: InstanceModule): ModuleData => {
				return {
					id: instance.id,
					structureData: instance.structureData,
					children: instance.children?.map((child: InstanceModule): ModuleData => {
						return exportInstance(child)
					}),
				}
			}

			return this.instances.map((instance) => {
				return exportInstance(instance)
			})
		},
		instanceCount(): number {
			if (!this.instances) {
				return 0
			}

			return this.instances.reduce((count, instance) => {
				if (instance.children) {
					count += instance.children.length
				}
				return count + 1
			}, 0)
		}
	},
	actions: {
		duplicateInstance(instance: InstanceModule) {
			const parent = findParent(this.instances, instance)
			const instanceCopy = deepCopy(instance)
				if (!parent) {
					const index = this.instances.findIndex((i) => i.nonce === instance.nonce)
					if (index === -1) {
						this.instances.push(instanceCopy)
						return
					}
					this.instances.splice(index + 1, 0, instanceCopy)
					return
				}
			if(!parent.children) {
				parent.children = []
			}
			const index = parent.children.findIndex((i: InstanceModule) => i.nonce === instance.nonce)
			parent.children.splice(index + 1, 0, instanceCopy)

		},
		import(templateData: ModuleData[], modules: Module[]) {
			const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
			const brokenModule = (id: string): Module => ({
				id,
				title: `Broken: ${id}`,
				icon: '',
				render: [
					`<div style="display:flex;align-items:flex-start;gap:12px;padding:14px 16px;`,
					`background:#fafafa;border:1px dashed #d4d4d8;border-radius:6px;color:#52525b;`,
					`font-family:system-ui,-apple-system,sans-serif;line-height:1.45;">`,
					`<span style="flex-shrink:0;width:24px;height:24px;display:inline-flex;align-items:center;`,
					`justify-content:center;color:#dc2626;font-size:16px;">⚠</span>`,
					`<div style="display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;">`,
					`<span style="font-size:14px;font-weight:600;color:#3f3f46;">Broken module</span>`,
					`<span style="font-size:12px;font-weight:400;color:#71717a;">`,
					`Component <code style="display:inline-block;background:#f4f4f5;border:1px solid #e4e4e7;`,
					`color:#3f3f46;padding:1px 6px;border-radius:3px;font-family:'Fira Code','Courier New',monospace;`,
					`font-size:11px;font-weight:500;">${escapeHtml(id)}</code> `,
					`was not found — it may have been deleted, renamed, or is not registered in the modules list.`,
					`</span></div></div>`,
				].join(''),
				structure: { tabs: [] },
			})
			const createInstance = (data: ModuleData): InstanceModule => {
				let module = modules.find((m) => m.id === data.id)
				if (!module) {
					console.warn(`Module with id "${data.id}" not found, rendering as broken module`)
					module = brokenModule(data.id)
				}
				return {
					nonce: Math.random().toString(36).substring(2),
					id: data.id,
					children: data.children?.map((child) => createInstance(child)) as InstanceModule[],
					structureData: JSON.parse(JSON.stringify(data.structureData)),
					module: module,
				}
			}
			for (const instance of templateData) {
				this.instances.push(createInstance(instance))
			}
		},
		moveInstance(oldIndex: number, newIndex: number) {
			if (newIndex >= this.instances.length) {
				let i = newIndex - this.instances.length + 1
				while (i--) {
					this.instances.push(undefined as any)
				}
			}
			this.instances.splice(newIndex, 0, this.instances.splice(oldIndex, 1)[0])
		},
		updateInstance(instance: InstanceModule) {
			for (let i = 0; i < this.instances.length; i++) {
				if (this.instances[i].nonce === instance.nonce) {
					this.instances[i] = instance
					return
				}
				this.updateInChildren(this.instances[i], instance)
			}
		},
		updateInChildren(instance: InstanceModule, update: InstanceModule) {
			if (!instance.children) return
			const index = instance.children.findIndex((i) => (i as InstanceModule).nonce === update.nonce)
			if (index !== -1) {
				instance.children[index] = update
			}
			for (let i = 0; i < instance.children.length; i++) {
				this.updateInChildren(instance.children[i], update)
			}
		},
		removeInstance(instance: InstanceModule, recursively: boolean = false) {
			const index = this.instances.findIndex((i) => i.nonce === instance.nonce)
			if (index !== -1) {
				this.instances.splice(index, 1)
			}
			if (recursively) {
				for (const i of this.instances) {
					this.removeInChildren(i, instance)
				}
			}
		},
		removeInChildren(instance: InstanceModule, remove: InstanceModule) {
			if (!instance.children) return
			const index = instance.children.findIndex((i) => (i as InstanceModule).nonce === remove.nonce)
			if (index !== -1) {
				instance.children.splice(index, 1)
			}
			for (let i = 0; i < instance.children.length; i++) {
				this.removeInChildren(instance.children[i], remove)
			}
		},
		addInstance(instance: InstanceModule, newIndex: number) {
			const newInstance = {
				...instance,
				module: instance.module,
				nonce: Math.random().toString(36).substring(2),
				children: instance.children ? instance.children : [],
			};

			this.instances.splice(newIndex, 0, newInstance);
		},
		addInstanceFromModule(module: Module, position = 0) {
			this.instances.splice(position, 0, {
				id: module.id,
				structureData: getDefaultData(module),
				module: module,
				nonce: Math.random().toString(36).substring(2),
				children: [],
			})
		},
		addInstanceFromModuleToParent(module: Module, parent: InstanceModule, position: 'start' | 'end' = 'start') {
			if (!parent.children) {
				parent.children = []
			}
			const insertIndex = position === 'end' ? parent.children.length : 0
			parent.children.splice(insertIndex, 0, {
				id: module.id,
				structureData: getDefaultData(module),
				module: module,
				nonce: Math.random().toString(36).substring(2),
				children: [],
			})
		},
		clear() {
			this.instances = []
		}
	},
})