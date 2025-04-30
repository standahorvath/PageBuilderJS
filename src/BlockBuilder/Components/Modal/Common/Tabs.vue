<template>
<div class="bb-modal__tabs">
	<button class="bb-modal__tab" :class="modelValue == tab.id ? ['bb-modal__tab--active'] : []" v-for="tab in tabs" :key="tab.id" @click="onClick(tab)">
		{{ tab.title }}
	</button>
</div>
<div class="bb-modal__tabs__content">
	<slot />
</div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { ModalTab } from "@/types";

defineProps({
	tabs: {
		type: Array as PropType<ModalTab[]>,
		required: true,
	},
	modelValue: {
		type: [String, null] as PropType<string | null>,
		default: null
	}
})

const emits = defineEmits(['update:modelValue']);

const onClick = (tab: ModalTab) => {
	emits('update:modelValue', tab.id);
}
</script>