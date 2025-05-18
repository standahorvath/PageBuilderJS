<template>
	<div class="bb-module__header">
		<span class="bb-module__header__left">
			<Icon :name="icon" width="20" height="20" v-if="icon" />
			<span v-if="!$slots.title">{{ title ?? '' }}</span>
			<slot name="title" v-else /> 
			<button class="bb-module__header__edit" @click="onEdit" title="Edit">
				<IconEdit />
			</button>
			<button class="bb-module__header__copy" @click="onDuplicate" title="Duplicate">
				<IconCopy />
			</button>
		</span>
		<span class="bb-module__header__right">
			<button class="bb-module__header__remove" @click="onRemove" title="Remove">
				<IconCross />
			</button>
		</span>
	</div>
</template>
<script setup lang="ts">
import IconCross from "@/BlockBuilder/Icons/Cross.vue";
import IconEdit from "@/BlockBuilder/Icons/Edit.vue";
import IconCopy from "@/BlockBuilder/Icons/Copy.vue";
import Icon from "@/BlockBuilder/Icons/Icon.vue";
defineProps({
	title: {
		type: String,
		required: false,
	},
	icon: {
		type: String,
		required: false,
	},
})
const emits = defineEmits(["remove", "edit", "duplicate"]);
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