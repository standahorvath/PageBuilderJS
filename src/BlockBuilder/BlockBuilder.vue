<template>
	<div class="bb-container">
		<Title />
		<ToolBar :toolbar="toolbar" :modules="modules" />
		<ControlPanel />
		<Content :instances="instances" />
	</div>
</template>
<script setup lang="ts">
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";
import Title from "@/BlockBuilder/Components/Title.vue";
import ControlPanel from "@/BlockBuilder/Components/ControlPanel.vue";
import Content from "@/BlockBuilder/Components/Content/Content.vue";
import { computed, defineProps, PropType } from "vue";
import { Module, ModuleData, Toolbar } from "@/types";
import { useContentStore } from "@/store/ContentStore";

const props = defineProps({
	modules: {
		type: Array as PropType<Module[]>,
		required: true,
	},
	toolbar: {
		type: Object as PropType<Toolbar>,
		required: true,
	},
	content: {
		type: Array as PropType<ModuleData[]>,
		default: () => [],
	},
})

useContentStore().initInstances(props.content)

const instances = computed(() => {
	return useContentStore().instances
})


</script>