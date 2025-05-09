<template>
	<teleport to="body">
		<div class="bb-modal">
			<div class="bb-modal__overlay"></div>
			<div class="bb-modal__container" :style="{ width, height }">

				<!-- Modal Header -->
				<div class="bb-modal__header" v-if="$slots.header">
					<slot name="header" />
				</div>
				<div class="bb-modal__header" v-else>
					<span class="bb-modal__title">{{ title }}</span>
					<span>
						<button class="bb-modal__header__remove" @click="onClose" title="Remove">
							<IconCross />
						</button>
					</span>
				</div>

				<!-- Modal Content -->
				<div class="bb-modal__content">
					<slot />
				</div>

				<!-- Modal Footer -->
				<div class="bb-modal__footer" v-if="$slots.footer">
					<slot name="footer" />
				</div>
				<div class="bb-modal__footer" v-else>
					<div></div>
					<button class="bb-modal__footer__button" @click="onSave">Save</button>
				</div>

			</div>
		</div>
	</teleport>
</template>
<script setup lang="ts">
import IconCross from "@/BlockBuilder/Icons/Cross.vue";
import { defineProps, defineEmits } from "vue";

defineProps({
	title: {
		type: String,
		required: true,
	},
	width: {
		type: String,
		default: undefined,
	},
	height: {
		type: String,
		default: undefined,
	},
})
const emits = defineEmits(["close", "save"]);

const onClose = () => {
	emits("close");
}
const onSave = () => {
	emits("save");
}

</script>