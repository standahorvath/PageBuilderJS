<template>
	<div class="bb-control-panel">
		<div class="bb-control-panel__column">
		<button class="bb-control-panel__button" :class="[canActions.canUndo ? '' : 'bb-control-panel__button--disabled']"><IconBack /></button>
		<button class="bb-control-panel__button" :class="[canActions.canRedo ? '' : 'bb-control-panel__button--disabled']"><IconForward /></button>
		</div>
		
		<div class="bb-control-panel__column">
			<button class="bb-control-panel__button" :class="[numOfBlock === 0 ? 'bb-control-panel__button--disabled' : '']" @click="onTemplatesAdd" :disabled="numOfBlock === 0"><IconPlus /> Create template</button>
			<button class="bb-control-panel__button" :class="[isTemplatesEmpty ? 'bb-control-panel__button--disabled' : '']" @click="onTemplatesClick"><IconBox /> Templates</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import IconBack from "@/BlockBuilder/Icons/Back.vue";
import IconForward from "@/BlockBuilder/Icons/Forward.vue";
import IconBox from "@/BlockBuilder/Icons/Box.vue";
import IconPlus from "@/BlockBuilder/Icons/Plus.vue";
import { computed } from "vue";
import { useContentStore } from "@/store/ContentStore";
import { useTemplateStore } from "@/store/TemplateStore";
import { useHistoryStore } from "@/store/HistoryStore";

const emits = defineEmits(["templatesClick", "templatesAddClick"]);

const canActions = computed(() => {
	const historyStore = useHistoryStore();
	return {
		canUndo: historyStore.canUndo,
		canRedo: historyStore.canRedo,
	};
});

const onTemplatesClick = () => {
	emits("templatesClick");
}

const numOfBlock = computed(() => {
	return useContentStore().instanceCount;
});

const onTemplatesAdd = () => {
	emits("templatesAddClick");
}

const isTemplatesEmpty = computed(() => {
	if(!useTemplateStore()) return true;
	return useTemplateStore().templates.length === 0;
});
</script>