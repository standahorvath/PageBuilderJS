<template>
	<span class="bb-icon" v-if="name">
    <component :is="iconComponent" v-if="iconComponent" :style="iconStyle" />
    <span v-else><img :src="name" alt="" @error="onIconLoadError" :style="iconStyle" /></span>
	</span>
</template>
<script setup lang="ts">
import { IconName, IconsMap } from '@/BlockBuilder/Utils/IconsMap';
import { computed, PropType } from 'vue';

const props = defineProps({
	name: {
		type: String as PropType<IconName | string | null>,
		required: true,
	},
	width: {
		type: [String, Number] as PropType<string | number>,
		default: 24,
	},
	height: {
		type: [String, Number] as PropType<string | number>,
		default: 24,
	},
})

const iconComponent = computed(() => { 
	if(!props.name) return null;
	
	return IconsMap[props.name as keyof typeof IconsMap] ?? null
});

const iconStyle = computed(() => {
	const width = typeof props.width === 'number' ? `${props.width}px` : props.width;
	const height = typeof props.height === 'number' ? `${props.height}px` : props.height;
	return {
		width,
		height,
	}
})

const onIconLoadError = () => {
		console.error(`Icon "${props.name}" not found.`);
}
</script>
