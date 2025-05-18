<template>
	<Base title="Project Info" @close="onClose" width="500px" height="530px">
		<div class="bb-modal__form bb-modal__info">
			<h2>PageBuilderJS v{{ PROJECT_VERSION }}</h2>
			<p>A modern block-based web page builder built with Vue 3, Tailwind CSS, and Vite. Perfect for creating modular and customizable pages visually.</p>
			<div>
				<strong>Documentation:</strong>
				<a href="https://github.com/standahorvath/PageBuilderJS#readme" target="_blank" class="text-blue-600 hover:underline">
					View README on GitHub
				</a>
			</div>
			<div>
				<strong>Source Code & Issues:</strong>
				<ul>
					<li>
						<a href="https://github.com/standahorvath/PageBuilderJS" target="_blank" class="text-blue-600 hover:underline">
							GitHub Repository
						</a>
					</li>
					<li>
						<a href="https://github.com/standahorvath/PageBuilderJS/issues" target="_blank" class="text-blue-600 hover:underline">
							Issue Tracker
						</a>
					</li>
				</ul>
			</div>
			<div>
				<strong>License:</strong>
				<p>Open Source - ISC License</p>
			</div>
			<div>
				<strong>Support:</strong>
				<p>If you need help or want to contribute, feel free to open an issue or fork the project.</p>
			</div>
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
import { PROJECT_VERSION } from "@/data/version"

const emits = defineEmits(["close"]);

const onClose = () => {
	emits("close");
};
</script>
