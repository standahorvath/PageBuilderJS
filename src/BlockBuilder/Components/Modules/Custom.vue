<template>
	<div class="bb-module">
	<ModuleHeader :title="module.title" :icon="module.icon" @remove="onRemove" @edit="onEdit" @duplicate="onDuplicate" />
	<ModuleContent class="bb-min-h-0">
		<div class="bb-module__custom" v-html="moduleContent" />
	</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import { computed, PropType } from "vue";
import { AttributeData, InstanceModule, Module } from "@/types";
import { Templify } from 'templify-js';

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

const moduleContent = computed(() => {
	if(!props.module.render) return props.module.title
	let content = props.module.render
	if (typeof content !== "string") {
		return ''
	}
	const templify = new Templify(content);
	return templify.render(props.data.reduce((acc, item) => {
		acc[item.id] = item.value
		return acc
	}, {} as Record<string, any>))
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