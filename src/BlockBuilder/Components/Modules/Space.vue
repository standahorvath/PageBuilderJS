<template>
	<div class="bb-module">
	<ModuleHeader :title="`Space`" />
	<ModuleContent class="bb-min-h-0">
		<div class="bb-module__space"></div>
	</ModuleContent>
	</div>
</template>
<script setup lang="ts">
import ModuleHeader from "@/BlockBuilder/Components/Modules/Common/Header.vue";
import ModuleContent from "@/BlockBuilder/Components/Modules/Common/Content.vue";
import { computed } from "vue";

</script>