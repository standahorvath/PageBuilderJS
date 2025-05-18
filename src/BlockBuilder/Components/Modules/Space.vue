<template>
	<div class="bb-module">
	<ModuleHeader :title="module.title" :icon="module.icon" @remove="onRemove" @edit="onEdit" @duplicate="onDuplicate" />
	<ModuleContent class="bb-min-h-0">
		<div class="bb-module__space" :style="spacerStyles"></div>
	</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import { computed, PropType } from "vue";
import { AttributeData, InstanceModule, Module } from "@/types";

const emits = defineEmits(["remove", "edit", "duplicate"]);
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

const spacerStyles = computed(() => {
	const size = props.data.find((item) => item.id === "size")?.value || 0;
	return {
		"min-height": `${size}px`,
	}
})

const onRemove = () => {
	emits("remove");
}
const onEdit = () => {
	emits("edit");
}
const onDuplicate = () => {
	emits("duplicate");
}

</script>