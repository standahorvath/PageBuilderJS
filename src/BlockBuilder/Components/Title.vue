<template>
	<div class="bb-header">
		<span class="bb-header__title">Block Builder</span> 
		<button class="bb-button bb-button--secondary" @click="showInfo = true">
			<Icon :name="IconName.InformationCircleIcon" width="20" height="20" />
		</button>
	</div>
	<Teleport to="body">
		<InfoModal v-if="showInfo" v-model="showInfo" @close="showInfo = false" />
	</Teleport>
</template>

<script setup lang="ts">
import Icon from "@/BlockBuilder/Icons/Icon.vue";
import { IconName } from "@/BlockBuilder/Utils/IconsMap"
import { ref } from "vue";
import InfoModal from "@/BlockBuilder/Components/Modal/Info.vue";

const showInfo = ref(false);

</script>