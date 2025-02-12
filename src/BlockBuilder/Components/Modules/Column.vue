<template>
	<div class="bb-module" :style="columnStyles">
	<ModuleHeader :title="`${title} ${col}/${cols}`" @remove="onRemove" @edit="onEdit" />
	<ModuleContent>
		<slot />
	</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import { computed, PropType } from "vue";
import { AttributeData } from "@/types";

const emits = defineEmits(["remove", "edit"]);
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	col: {
		type: Number,
		required: true,
	},
	data: {
		type: Array as PropType<AttributeData[]>,
		default: () => [],
	},
})
const cols = 12
const columnStyles = computed(() => {
	return {
		width: `calc(${(props.col / cols) * 100}% - var(--bb-module-gap-between))`,
	}
})

const onRemove = () => {
	emits("remove");
}
const onEdit = () => {
	emits("edit");
}

</script>