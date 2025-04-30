<template>
	<div class="bb-accordition" :class="{'bb-accordition--open': props.modelValue}">
		<button class="bb-accordition__header" @click="onHeaderClick">
			<ChewronDown class="bb-accordition__header__icon" />
			{{ title }}
		</button>
		<div class="bb-accordition__content" v-show="props.modelValue">
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import ChewronDown from "@/BlockBuilder/Icons/ChevronDown.vue";

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	modelValue: {
		type: Boolean,
		default: false
	}
})

const isOpen = ref(false)

const onHeaderClick = () => {
	emits('update:modelValue', !props.modelValue);
}

</script>