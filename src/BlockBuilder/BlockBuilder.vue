<template>
	<div class="bb-container">
		<Title />
		<ToolBar :blocks="blocks" />
		<ControlPanel />
		<Content />
	</div>
</template>
<script setup>
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";
import Title from "@/BlockBuilder/Components/Title.vue";
import ControlPanel from "@/BlockBuilder/Components/ControlPanel.vue";
import Content from "@/BlockBuilder/Components/Content/Content.vue";

const props = defineProps({
	blocks: {
		type: Number,
		required: true,
	}
})
</script>