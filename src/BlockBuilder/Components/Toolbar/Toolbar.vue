<template>
	<div class="bb-toolbar">
		<ToolbarTabs :tabs="tabs" v-model="activeTab" />
		<ToolbarTools :tools="tools[activeTab as keyof typeof tools]" @click="onToolClick" />
	</div>
</template>
<script setup lang="ts">
import { computed, PropType, ref, watch } from "vue";
import ToolbarTabs from "@/BlockBuilder/Components/Toolbar/Tabs.vue";
import ToolbarTools from "@/BlockBuilder/Components/Toolbar/ToolbarTools.vue";
import { Module, Toolbar, ToolbarTool } from "@/types";

const props = defineProps({
	modules: {
		type: Array as PropType<Module[]>,
		required: true,
	},
	toolbar: {
		type: Object as PropType<Toolbar>,
		required: true,
	}
})

const emits = defineEmits(["toolClick"]);

const tabs = computed(() => props.toolbar.tabs.map(tab => ({ title: tab.title, id: tab.id, icon: tab.icon })));

const activeTab = ref();

watch(() => tabs.value, () => {
	if (tabs.value.length === 0){
		activeTab.value = null;
		return;
	}
	activeTab.value = tabs.value[0].id;
}, { immediate: true });

const tools = computed(() => {
	const tools = {} as Record<string, ToolbarTool[]>;
	props.toolbar.tabs.forEach(tab => {
		tools[tab.id] = tab.tools.map(tool => {
			const moduleTool = props.modules.find(module => module.id === tool);
			if(!moduleTool){
				console.error(`Module ${tool} not found`);
				return null;
			}
			return {
				id: tool,
				title: moduleTool.title,
			}
		}).filter(tool => tool !== null) as ToolbarTool[];
	});
	return tools;
});

const onToolClick = (tool: ToolbarTool) => {
	emits("toolClick", tool);
}

</script>