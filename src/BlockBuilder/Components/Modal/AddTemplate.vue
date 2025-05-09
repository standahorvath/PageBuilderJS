<template>
	<Base title="Create template" @save="onSave" @close="onClose" width="350px" height="250px">
		<div class="bb-modal__form">
			<label>Enter name of template</label>
			<TextInput
				v-model="templateName"
				placeholder="Template name"
				:required="true"
				/>
			<small>This will create a template from your {{ numOfBlock }} blocks.</small>
		</div>
		<template #footer>
			<div></div>
			<button
				class="bb-modal__form__button"
				:class="[!templateName ? 'bb-modal__form__button--disabled' : '']"
				@click="onSave"
				:disabled="!templateName"
				>
				Create
			</button>
		</template>
	</Base>
</template>
<script setup lang="ts">
import Base from "@/BlockBuilder/Components/Modal/Base.vue";
import TextInput from "../Input/TextInput.vue";
import { computed, ref } from "vue";
import { useContentStore } from "@/store/ContentStore";

const emits = defineEmits(["save"]);
const templateName = ref("");
const numOfBlock = computed(() => {
	return useContentStore().instanceCount;
});

const onSave = () => {
	if (!templateName.value) return;
	const template = {
		name: templateName.value,
		data: useContentStore().export,
	};
	templateName.value = "";
	emits("save", template);
}

const onClose = () => {
	// Close logic here
}

</script>