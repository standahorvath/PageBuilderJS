import { InstanceModule } from '@/types'
import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
	state: () => ({
		instances: [] as InstanceModule[],
	}),
	getters: {
		getBuildInComponentIds() {
			return ['space', 'column']
		},
	},
	actions: {
		addInstance(instance: InstanceModule) {
			this.instances.push(instance)
		},
		initInstances(instances: InstanceModule[]) {
			this.instances = instances.map((instance) => {
				return {
					...instance,
					nonce: Math.random().toString(36).substring(2),
				}
			})
		},
	},
})