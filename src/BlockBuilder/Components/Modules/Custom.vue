<template>
	<div class="bb-module">
	<ModuleHeader :title="title" @remove="onRemove" @edit="onEdit" />
	<ModuleContent class="bb-min-h-0">
		<div class="bb-module__space"></div>
	</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import { PropType } from "vue";
import { AttributeData, InstanceModule } from "@/types";

const emits = defineEmits(["remove", "edit"]);
const props = defineProps({
	data: {
		type: Array as PropType<AttributeData[]>,
		default: () => [],
	},
	title: {
		type: String,
		required: true,
	},
})

const onRemove = () => {
	emits("remove");
}
const onEdit = () => {
	emits("edit");
}

</script>