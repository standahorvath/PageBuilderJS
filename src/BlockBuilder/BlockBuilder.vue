<template>
	<div class="bb-container">
		<Title />
		<ToolBar :blocks="blocks" />
	</div>
</template>
<script setup>
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";
import Title from "@/BlockBuilder/Components/Title.vue";

const props = defineProps({
	blocks: {
		type: Number,
		required: true,
	}
})
</script>