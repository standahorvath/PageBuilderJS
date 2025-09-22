import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		fullscreen: false,
	}),
	actions: {
		toggleFullScreen() {
			this.fullscreen = !this.fullscreen
		}
	}
})