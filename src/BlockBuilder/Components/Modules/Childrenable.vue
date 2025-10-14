<template>
	<div class="bb-module">
		<ModuleHeader :title="module.title" :icon="module.icon" @remove="onRemove" @edit="onEdit" @duplicate="onDuplicate" />
		<ModuleContent>
			<div v-click-outside="onOutsideClickTools">
			<div class="bb-module__new-module">
				<SlideFromTop class="tooltip">
				<div class="bb-module__new-module__tooltip bb-module__new-module__tooltip--top" v-if="isUpperToolsOpened">
					<ToolBar :toolbar="toolbar" :modules="modules" @toolClick="(tool: ToolbarTool) => onToolClick(tool, 'start')" />
				</div>
				</SlideFromTop>
				<button @click.stop="isUpperToolsOpened = !isUpperToolsOpened; isLowerToolsOpened = false;"><IconPlus /></button>
			</div>
			<slot />
			<div class="bb-module__new-module">
				<SlideFromBottom class="tooltip">
				<div class="bb-module__new-module__tooltip bb-module__new-module__tooltip--bottom" v-if="isLowerToolsOpened">
					<ToolBar :toolbar="toolbar" :modules="modules" @toolClick="(tool: ToolbarTool) => onToolClick(tool, 'end')" />
				</div>
				</SlideFromBottom>
				<button @click.stop="isLowerToolsOpened = !isLowerToolsOpened; isUpperToolsOpened = false;"><IconPlus /></button>
			</div>
			</div>
		</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import IconPlus from "@/BlockBuilder/Icons/Plus.vue";
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";

import { computed, inject, PropType, ref } from "vue";
import { AttributeData, Module, Toolbar, ToolbarTool } from "@/types";
import SlideFromBottom from "../Transitions/SlideFromBottom.vue";
import SlideFromTop from "../Transitions/SlideFromTop.vue";

const emits = defineEmits(["remove", "edit", "duplicate", "toolClick"]);
defineProps({
	data: {
		type: Array as PropType<AttributeData[]>,
		default: () => [],
	},
	module: {
		type: Object as PropType<Module>,
		required: true,
	},
})

const toolbar = inject('toolbar') as Toolbar;
const modules = inject('modules') as Module[];

const isUpperToolsOpened = ref(false);
const isLowerToolsOpened = ref(false);


const onRemove = () => {
	emits("remove");
}
const onEdit = () => {
	emits("edit");
}
const onDuplicate = () => {
	emits("duplicate");
}
const onToolClick = (tool: ToolbarTool, position?: "start" | "end") => {
	emits("toolClick", tool, position);
	onOutsideClickTools();
}

const onOutsideClickTools = () => {
	isUpperToolsOpened.value = false;
	isLowerToolsOpened.value = false;
}

</script>