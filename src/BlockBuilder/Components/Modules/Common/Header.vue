<template>
<div class="bb-module__header">
	<span>{{ title }} <button class="bb-module__header__edit" @click="onEdit" title="Edit"><IconEdit /></button></span>
	<span><button class="bb-module__header__remove" @click="onRemove" title="Remove"><IconCross /></button></span>
</div>
</template>
<script setup lang="ts">
import IconCross from "@/BlockBuilder/Icons/Cross.vue";
import IconEdit from "@/BlockBuilder/Icons/Edit.vue";

defineProps({
	title: {
		type: String,
		required: true,
	}
})
const emits = defineEmits(["remove", "edit"]);
const onRemove = () => {
	emits("remove");
}
const onEdit = () => {
	emits("edit");
}
</script>