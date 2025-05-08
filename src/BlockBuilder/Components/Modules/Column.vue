<template>
	<div class="bb-module" :style="columnStyles">
		<ModuleHeader @remove="onRemove" @edit="onEdit">
			<template #title>
				<span class="bb-module__header__title">
				<button @click="onColumnChange(-1)" v-if="col > 1" class="bb-module__header__button">
					<IconChevronLeft class="bb-module__header__chevron" />
				</button>
				<span class="bb-module__header__name">{{ module.title }} {{ col }}/{{ cols }}</span>
				<button @click="onColumnChange(1)" v-if="col < cols" class="bb-module__header__button">
					<IconChevronRight class="bb-module__header__chevron" />
				</button>
			</span>
			</template>
		</ModuleHeader>
		<ModuleContent>
			<slot />
		</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import IconChevronRight from "@/BlockBuilder/Icons/ChevronRight.vue";
import IconChevronLeft from "@/BlockBuilder/Icons/ChevronLeft.vue";

import { computed, PropType } from "vue";
import { AttributeData, Module } from "@/types";

const emits = defineEmits(["remove", "edit"]);
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
const cols = 12
const columnStyles = computed(() => {
	return {
		width: `calc(${(col.value / cols) * 100}% - var(--bb-module-gap-between))`,
	}
})
const col = computed(() => {
	return props.data.find((item) => item.id === "size")?.value || 1;
})

const onRemove = () => {
	emits("remove");
}
const onEdit = () => {
	emits("edit");
}
const onColumnChange = (value: number) => {
	const newCol = col.value + value;
	if (newCol > 0 && newCol <= cols) {
		const sizeAttribute = props.data.find((item) => item.id === "size");
		if(sizeAttribute){
			sizeAttribute.value = newCol;
		} else {
			props.data.push({ id: "size", value: newCol });
		}
	}
}

</script>