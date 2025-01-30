<template>
	<div class="bb-module" :style="columnStyles">
	<ModuleHeader :title="`${title} ${col}/${cols}`" />
	<ModuleContent>
		<slot />
	</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import { computed } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	cols: {
		type: Number,
		required: true,
	},
	col: {
		type: Number,
		required: true,
	},
})

const columnStyles = computed(() => {
	return {
		width: `calc(${(props.col / props.cols) * 100}% - var(--bb-module-gap-between))`,
	}
})
</script>