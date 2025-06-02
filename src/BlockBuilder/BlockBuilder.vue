<template>
	<div class="bb-container" ref="rootEl">
		<Title />
		<ToolBar :toolbar="toolbar" :modules="modules" @toolClick="onToolClick" />
		<ControlPanel @templatesClick="templatesModalOpened=true" @templatesAddClick="addTemplateModalOpened=true" />
		<Content :instances="instances" @edit="onEdit" />
		<FadeTrasition>
			<EditInstanceModal v-if="modalOpened && editInstance && editInstanceModule" :instance="editInstance"
				:module="editInstanceModule" @close="onModalClose" @save="onModalSave" :uploader="uploader" />
			<TemplatesModal v-if="templatesModalOpened" @close="templatesModalOpened=false" @delete="onTemplateDelete" @append="onTemplateAppend" />
			<AddTemplateModal v-if="addTemplateModalOpened" @close="addTemplateModalOpened=false" @save="onTemplateCreate" />
		</FadeTrasition>
	</div>
</template>
<script setup lang="ts">
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";
import Title from "@/BlockBuilder/Components/Title.vue";
import ControlPanel from "@/BlockBuilder/Components/ControlPanel.vue";
import Content from "@/BlockBuilder/Components/Content/Content.vue";
import { computed, defineProps, getCurrentInstance, PropType, ref } from "vue";
import { InstanceModule, Module, ModuleData, Template, Toolbar, ToolbarTool } from "@/types";
import { useContentStore } from "@/store/ContentStore";
import EditInstanceModal from "@/BlockBuilder/Components/Modal/EditInstance.vue";
import TemplatesModal from "@/BlockBuilder/Components/Modal/Templates.vue";
import AddTemplateModal from "@/BlockBuilder/Components/Modal/AddTemplate.vue";
import FadeTrasition from "@/BlockBuilder/Components/Transitions/FadeTransition.vue";
import { useTemplateStore } from "@/store/TemplateStore";
import { useHistoryStore } from "@/store/HistoryStore";
import { MutationType } from "pinia";

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
	uploader: {
		type: Function as PropType<(callback: (image: string) => void) => void>,
		default: null,
	},
})

const emits = defineEmits([
	"onModalSave",
	"onUpdate",
	"onTemplateCreate",
	"onTemplateDelete",
	"onTemplatesUpdate",
	"onTemplateAppend",
])

const modalOpened = ref(false)
const addTemplateModalOpened = ref(false)
const templatesModalOpened = ref(false)
const editInstance = ref<InstanceModule | null>(null)
const rootEl = ref<HTMLElement | null>(null)
const history = useHistoryStore()

const editInstanceModule = computed(() => {
	if (!editInstance.value) return null
	return props.modules.find(module => editInstance.value && module.id === editInstance.value.id)
})

useContentStore().initInstances(props.content, props.modules)
useContentStore().$subscribe((mutation) => {
	if(history.currentIndex === history.history.length - 1 || mutation.events.type === 'add'){
		history.saveState(useContentStore().instances)
	}
	emits('onUpdate', useContentStore().instances)
})

useTemplateStore().$subscribe(() => {
	emits('onTemplatesUpdate', useTemplateStore().templates)
})

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

const onModalSave = (newVersion: InstanceModule) => {
	modalOpened.value = false
	editInstance.value = null
	useContentStore().updateInstance(newVersion)
	emits('onModalSave', newVersion)
}

const onTemplateCreate = (template: Template) => {
	if (!template) return
	useTemplateStore().templates.push(template)
	addTemplateModalOpened.value = false
	emits('onTemplateCreate', template)
}

const onTemplateDelete = (name: string) => {
	if (!name) return
	useTemplateStore().deleteTemplate(name)
	emits('onTemplateDelete', name)
}

const onTemplateAppend = (name: string) => {
	if (!name) return
	const template = useTemplateStore().getTemplate(name)
	if (!template) return
	useContentStore().import(template.data, props.modules)
	templatesModalOpened.value = false
	emits('onTemplateAppend', name)
}

</script>
