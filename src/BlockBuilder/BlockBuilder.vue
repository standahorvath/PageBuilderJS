<template>
	<div class="bb-container">
		<Title />
		<ToolBar :toolbar="toolbar" :modules="modules" @toolClick="onToolClick" />
		<ControlPanel />
		<Content :instances="instances" @edit="onEdit" />
		<FadeTrasition>
			<EditInstanceModal v-if="modalOpened && editInstance && editInstanceModule" :instance="editInstance" :module="editInstanceModule" @close="onModalClose" @save="onModalSave" />
		</FadeTrasition>
	</div>
</template>
<script setup lang="ts">
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";
import Title from "@/BlockBuilder/Components/Title.vue";
import ControlPanel from "@/BlockBuilder/Components/ControlPanel.vue";
import Content from "@/BlockBuilder/Components/Content/Content.vue";
import { computed, defineProps, PropType, ref } from "vue";
import { InstanceModule, Module, ModuleData, Toolbar, ToolbarTool } from "@/types";
import { useContentStore } from "@/store/ContentStore";
import EditInstanceModal from "@/BlockBuilder/Components/Modal/EditInstance.vue";
import FadeTrasition from "@/BlockBuilder/Components/Transitions/FadeTransition.vue";

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

const modalOpened = ref(false)
const editInstance = ref<InstanceModule | null>(null)

const editInstanceModule = computed(() => {
	if(!editInstance.value) return null
	return props.modules.find(module => editInstance.value && module.id === editInstance.value.id)
})

useContentStore().initInstances(props.content)

const instances = computed(() => {
	return useContentStore().instances
})

const onToolClick = (tool: ToolbarTool) => {
	const module = props.modules.filter(module => module.id === tool.id)
	if (!module) {
		console.error(`Module ${tool.id} not found`);
		return;
	}
	useContentStore().addInstanceFromModule(module[0])
}

const onEdit = (instance: InstanceModule) => {
	editInstance.value = instance
	modalOpened.value = true
}

const onModalClose = () => {
	modalOpened.value = false
	editInstance.value = null
}

const onModalSave = () => {
	modalOpened.value = false
	editInstance.value = null
}

</script>