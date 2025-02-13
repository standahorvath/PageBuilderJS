<template>
	<div class="bb-accordition" :class="{'bb-accordition--open': isOpen}">
		<button class="bb-accordition__header" @click="onHeaderClick">
			{{ title }}
		</button>
		<div class="bb-accordition__content" v-show="isOpen">
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
})

const isOpen = ref(false)

const onHeaderClick = () => {
	isOpen.value = !isOpen.value
}

</script>