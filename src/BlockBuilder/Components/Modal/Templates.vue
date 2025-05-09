<template>
	<Base title="Templates" @close="onClose" width="400px" height="400px">
		<div class="bb-modal__form">
			<label>Here is list of templates which you can add into content.</label>
			<ul class="bb-modal__form__list">
				<li v-for="(template, index) in templates" :key="index + template.name" class="bb-modal__form__list__item bb-modal__form__list__item--template">
					<span>{{ template.name }}</span>
					<span class="bb-modal__form__list__item__buttons">
					<button @click="onTemplateAppend(template.name)" class="bb-modal__form__button">Use</button>
					<button @click="onTemplateDelete(template.name)" class="bb-modal__form__button bb-modal__form__button--danger">Delete</button>
					</span>
				</li>
			</ul>
		</div>
		<template #footer>
			<div></div>
			<button
				class="bb-modal__form__button"
				@click="onClose"
				>
				Close
			</button>
		</template>
	</Base>
</template>
<script setup lang="ts">
import Base from "@/BlockBuilder/Components/Modal/Base.vue";
import { computed } from "vue";
import { useTemplateStore } from "@/store/TemplateStore";

const emits = defineEmits(["close", "delete", "append"]);
const templates = computed(() => {
	return useTemplateStore().templates;
});

const onClose = () => {
	emits("close");
}

const onTemplateDelete = (name: string) => {
	emits("delete", name);
}
const onTemplateAppend = (name: string) => {
	emits("append", name);
}

</script>