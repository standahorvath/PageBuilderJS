<template>
	<div class="bb-control-panel">
		<div class="bb-control-panel__column">
		<button class="bb-control-panel__button"><IconBack /></button>
		<button class="bb-control-panel__button"><IconForward /></button>
		</div>
		
		<div class="bb-control-panel__column">
			<button class="bb-control-panel__button"><IconBox /> Templates</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import IconBack from "@/BlockBuilder/Icons/Back.vue";
import IconForward from "@/BlockBuilder/Icons/Forward.vue";
import IconBox from "@/BlockBuilder/Icons/Box.vue";
</script>