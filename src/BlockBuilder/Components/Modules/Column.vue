<template>
	<div class="bb-module" :style="columnStyles">
		<ModuleHeader @remove="onRemove" @duplicate="onDuplicate" :icon="module.icon" @edit="onEdit">
			<template #title>
				<span class="bb-module__header__title">
				<button @click="onColumnChange(-1)" v-if="col > 1" class="bb-module__header__button">
					<IconChevronLeft class="bb-module__header__chevron" />
				</button>
				<span class="bb-module__header__name"><span v-if="Number(col) > 1">{{ module.title }} </span>{{ col }}/{{ cols }}</span>
				<button @click="onColumnChange(1)" v-if="col < cols" class="bb-module__header__button">
					<IconChevronRight class="bb-module__header__chevron" />
				</button>
			</span>
			</template>
		</ModuleHeader>
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
import IconChevronRight from "@/BlockBuilder/Icons/ChevronRight.vue";
import IconChevronLeft from "@/BlockBuilder/Icons/ChevronLeft.vue";
import IconPlus from "@/BlockBuilder/Icons/Plus.vue";
import ToolBar from "@/BlockBuilder/Components/Toolbar/Toolbar.vue";

import { computed, inject, PropType, ref } from "vue";
import { AttributeData, Module, Toolbar, ToolbarTool } from "@/types";
import SlideFromBottom from "../Transitions/SlideFromBottom.vue";
import SlideFromTop from "../Transitions/SlideFromTop.vue";

const emits = defineEmits(["remove", "edit", "duplicate", "toolClick"]);
const props = defineProps({
	data: {
		type: Array as PropType<AttributeData[]>,
		default: () => [],
	},
	module: {
		type: Object as PropType<Module>,
		required: true,
	},
})
const cols = 12
const columnStyles = computed(() => {
	return {
		width: `calc(${(col.value / cols) * 100}% - var(--bb-module-gap-between))`,
	}
})
const col = computed(() => {
	return props.data.find((item) => item.id === "size")?.value || 1;
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
const onColumnChange = (value: number) => {
	const newCol = col.value + value;
	if (newCol > 0 && newCol <= cols) {
		const sizeAttribute = props.data.find((item) => item.id === "size");
		if(sizeAttribute){
			sizeAttribute.value = newCol;
		} else {
			props.data.push({ id: "size", value: newCol });
		}
	}
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