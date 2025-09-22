<template>
	<div class="bb-header">
		<span class="bb-header__title">Block Builder</span> 
		<div class="bb-header__actions">
		<button class="bb-button bb-button--secondary" @click="useAppStore().toggleFullScreen()">
			<Icon :name="useAppStore().fullscreen ? IconName.ArrowsPointingInIcon : IconName.ArrowsPointingOutIcon" width="20" height="20" />
		</button>
		<button class="bb-button bb-button--secondary" @click="showInfo = true">
			<Icon :name="IconName.InformationCircleIcon" width="20" height="20" />
		</button>
		</div>
	</div>
	<InfoModal v-if="showInfo" v-model="showInfo" @close="showInfo = false" />
</template>

<script setup lang="ts">
import Icon from "@/BlockBuilder/Icons/Icon.vue";
import { IconName } from "@/BlockBuilder/Utils/IconsMap"
import { ref } from "vue";
import InfoModal from "@/BlockBuilder/Components/Modal/Info.vue";
import { useAppStore } from "@/store/AppStore";


const showInfo = ref(false);

</script>