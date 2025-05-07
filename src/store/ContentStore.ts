import { ModuleInstanceId } from '@/enums/modules/Module'
import { InstanceModule, Module, ModuleData } from '@/types'
import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
	state: () => ({
		instances: [] as InstanceModule[],
	}),
	getters: {
		getBuildInComponentIds() {
			return Object.keys(ModuleInstanceId).map((key) => ModuleInstanceId[key as keyof typeof ModuleInstanceId])
		},
	},
	actions: {
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
			const index = this.instances.findIndex((i) => i.nonce === instance.nonce)
			if (index !== -1) {
				this.instances[index] = instance
			} else {
				this.instances.push(instance)
			}
		},
		removeInstance(instance: InstanceModule) {
			console.log(this.instances)
			const index = this.instances.findIndex((i) => i.nonce === instance.nonce)
			if (index !== -1) {
				this.instances.splice(index, 1)
			}
			console.log(this.instances)
		},
		addInstance(instance: InstanceModule | ModuleData) {
			this.instances.push({
				...instance,
				nonce: Math.random().toString(36).substring(2),
				children: [],
			})
		},
		addInstanceFromModule(module: Module){
			this.instances.push({
				id: module.id,
				structureData: [], // TODO: Default module data
				nonce: Math.random().toString(36).substring(2),
				children: [],
			})
		},
		initInstances(instances: InstanceModule[] | ModuleData[]) {
			this.instances = instances.map((instance) => {
				return {
					children: [],
					...instance,
					nonce: Math.random().toString(36).substring(2),
				}
			})
		},
	},
})