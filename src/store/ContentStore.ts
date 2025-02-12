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
		removeInstance(instance: InstanceModule) {
			const index = this.instances.findIndex((i) => i.nonce === instance.nonce)
			if (index !== -1) {
				this.instances.splice(index, 1)
			}
		},
		addInstance(instance: InstanceModule | ModuleData) {
			this.instances.push({
				...instance,
				nonce: Math.random().toString(36).substring(2),
			})
		},
		addInstanceFromModule(module: Module){
			this.instances.push({
				id: module.id,
				structureData: [], // TODO: Default module data
				nonce: Math.random().toString(36).substring(2),
			})
		},
		initInstances(instances: InstanceModule[] | ModuleData[]) {
			this.instances = instances.map((instance) => {
				return {
					...instance,
					nonce: Math.random().toString(36).substring(2),
				}
			})
		},
	},
})