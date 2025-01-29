<template>
	<div class="bb-toolbar">
		<ToolbarTabs :tabs="tabs" v-model="activeTab" />
		<ToolbarTools :tools="tools[activeTab as keyof typeof tools]" />
	</div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import ToolbarTabs from "@/BlockBuilder/Components/Toolbar/Tabs.vue";
import ToolbarTools from "@/BlockBuilder/Components/Toolbar/ToolbarTools.vue";

const props = defineProps({
	blocks: {
		type: Number,
		required: true,
	}
})

const numOfBlocks = ref(props.blocks || 0);

const blocks = computed(() => {
	return Array.from({ length: numOfBlocks.value }, (_, i) => i);
});

const tabs = [
	{ id: "blocks", title: "Blocks" },
	{ id: "settings", title: "Settings" },
];
const activeTab = ref("blocks");

const tools = {
	blocks: [
		{ id: "text", title: "Text" },
		{ id: "image", title: "Image" },
		{ id: "video", title: "Video" },
	],
	settings: [
		{ id: "settings", title: "Settings" },
	],
}
</script>