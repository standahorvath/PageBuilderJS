<template>
	<div class="bb-container">
		<Title />
		<ToolBar :blocks="blocks" />
		<ControlPanel />
		<Content />
	</div>
</template>
<script setup lang="ts">
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";
import Title from "@/BlockBuilder/Components/Title.vue";
import ControlPanel from "@/BlockBuilder/Components/ControlPanel.vue";
import Content from "@/BlockBuilder/Components/Content/Content.vue";
import { defineProps, PropType } from "vue";
import { Module } from "@/types";

const props = defineProps({
	blocks: {
		type: Number,
		required: true,
	},
	modules: {
		type: Array as PropType<Module[]>,
		required: true,
	},
})
</script>