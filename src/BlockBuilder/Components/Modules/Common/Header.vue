<template>
<div class="bb-module__header">
	<span>{{ title }}</span>
	<span><button class="bb-module__header__remove" @click="onRemove"><IconCross /></button></span>
</div>
</template>
<script setup lang="ts">
import IconCross from "@/BlockBuilder/Icons/Cross.vue";
defineProps({
	title: {
		type: String,
		required: true,
	}
})
const emits = defineEmits(["remove"]);
const onRemove = () => {
	emits("remove");
}
</script>