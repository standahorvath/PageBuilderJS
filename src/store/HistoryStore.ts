// store/HistoryStore.ts
import { defineStore } from 'pinia'
import type { InstanceModule, HistoryEntry } from '@/types'

export const useHistoryStore = defineStore('history', {
    state: () => ({
        history: [] as HistoryEntry[],
        currentIndex: -1, // index aktuálního snapshotu
    }),
    getters: {
        canUndo: (state) => state.currentIndex > 0,
        canRedo: (state) => state.currentIndex < state.history.length - 1,
    },
    actions: {
        saveState(currentInstances: InstanceModule[], action?: string) {
            const snapshot = JSON.parse(JSON.stringify(currentInstances)) as InstanceModule[]

            if (this.currentIndex < this.history.length - 1) {
                this.history.splice(this.currentIndex + 1)
            }

            this.history.push({
                snapshot,
                timestamp: Date.now(),
                action,
            })
            this.currentIndex = this.history.length - 1
        },

        undo(): InstanceModule[] | null {
            if (this.canUndo) {
                this.currentIndex--
                return this.history[this.currentIndex].snapshot
            }
            return null
        },

        redo(): InstanceModule[] | null {
            if (this.canRedo) {
                this.currentIndex++
                return this.history[this.currentIndex].snapshot
            }
            return null
        },

        reset() {
            this.history = []
            this.currentIndex = -1
        }
    }
})
