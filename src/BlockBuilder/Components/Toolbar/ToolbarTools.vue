<template>
	<div class="bb-toolbar__tools">
				<div class="bb-toolbar__button" v-for="tool in tools" :key="tool.id">
					{{ tool.title }}
				</div>
		</div>
</template>
<script setup lang="ts">
import { ToolbarTool } from "@/types";
import { PropType } from "vue";

defineProps({
	tools: {
		type: Array as PropType<ToolbarTool[]>,
		required: true,
	}
})
</script>