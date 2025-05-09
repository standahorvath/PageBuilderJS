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
		export(): ModuleData[]{
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
			if(!this.instances) {
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
		import(templateData: ModuleData[], modules: Module[]) {
			const createInstance = (data: ModuleData): InstanceModule => {
				const module = modules.find((m) => m.id === data.id)
				if (!module) {
					throw new Error(`Module with id ${data.id} not found`)
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
				const children = this.instances[i].children
				if (!children) continue
				for (let j = 0; j < children.length; j++) {
					if (children[j].nonce === instance.nonce) {
						children[j] = instance
						return
					}
				}
			}
		},
		removeInstance(instance: InstanceModule) {
			const index = this.instances.findIndex((i) => i.nonce === instance.nonce)
			if (index !== -1) {
				this.instances.splice(index, 1)
			}
		},
		addInstance(instance: InstanceModule) {
			this.instances.push({
				...instance,
				module: instance.module,
				nonce: Math.random().toString(36).substring(2),
				children: [],
			})
		},
		addInstanceFromModule(module: Module) {
			this.instances.push({
				id: module.id,
				structureData: getDefaultData(module),
				module: module,
				nonce: Math.random().toString(36).substring(2),
				children: [],
			})
		},
		initInstances(instances: InstanceModule[] | ModuleData[], modules: Module[]) {
			this.instances = instances.map((instance) => {
				return {
					children: [] as InstanceModule[],
					module: modules.find((m) => m.id === instance.id) as Module,
					...instance,
					nonce: Math.random().toString(36).substring(2),
				} as InstanceModule
			})
		},
	},
})