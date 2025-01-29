<template>
	<div class="bb-toolbar__tabs">
	<button class="bb-toolbar__tab" :class="modelValue == tab.id ? ['bb-toolbar__tab--active'] : []" v-for="tab in tabs" :key="tab.id" @click="onClick(tab)">
		{{ tab.title }}
	</button>
</div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { ToolbarTab } from "@/types";

defineProps({
	tabs: {
		type: Array as PropType<ToolbarTab[]>,
		required: true,
	},
	modelValue: {
		type: String,
		required: true,
	}
})

const emits = defineEmits(['update:modelValue']);

const onClick = (tab: ToolbarTab) => {
	emits('update:modelValue', tab.id);
}
</script>