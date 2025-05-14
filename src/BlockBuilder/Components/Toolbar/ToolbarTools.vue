<template>
	<div class="bb-toolbar__tools">
				<div class="bb-toolbar__button" v-for="tool in tools" :key="tool.id" @click="onClick(tool)">
					<Icon :name="tool.icon ?? null" width="20" height="20" /> {{ tool.title }}
				</div>
		</div>
</template>
<script setup lang="ts">
import { ToolbarTool } from "@/types";
import { PropType } from "vue";
import Icon from "@/BlockBuilder/Icons/Icon.vue";

const emits = defineEmits(["click"]);
defineProps({
	tools: {
		type: Array as PropType<ToolbarTool[]>,
		required: true,
	}
})
const onClick = (tool: ToolbarTool) => {
	emits("click", tool);
}
</script>