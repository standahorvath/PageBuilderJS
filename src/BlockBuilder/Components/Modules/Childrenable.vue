<template>
	<div class="bb-module">
		<ModuleHeader :title="module.title" :icon="module.icon" @remove="onRemove" @edit="onEdit" @duplicate="onDuplicate" />
		<ModuleContent>
			<slot />
		</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";

import { computed, PropType } from "vue";
import { AttributeData, Module } from "@/types";

const emits = defineEmits(["remove", "edit", "duplicate"]);
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