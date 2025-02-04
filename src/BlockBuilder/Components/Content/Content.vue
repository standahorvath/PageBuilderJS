<template>
	<div class="bb-content">

		<EmptyContent v-if="!instances.length" />
		<component v-for="instance in instances" :key="instance.nonce" :is="instance.component" :instance="instance" />
		<!--
		<ModuleColumn :col="1" :cols="12" title="Column" />
		<ModuleColumn :col="2" :cols="12" title="Column" />
		<ModuleColumn :col="3" :cols="12" title="Column" />
		<ModuleColumn :col="4" :cols="12" title="Column" />
		<ModuleColumn :col="2" :cols="12" title="Column" />
		<ModuleColumn :col="5" :cols="12" title="Column" />
		<ModuleColumn :col="6" :cols="12" title="Column" />
		<ModuleColumn :col="6" :cols="12" title="Column" />
		<ModuleSpace />
		<ModuleColumn :col="6" :cols="12" title="Column" />
		<ModuleColumn :col="7" :cols="12" title="Column" />
		<ModuleColumn :col="5" :cols="12" title="Column" />
		<ModuleColumn :col="8" :cols="12" title="Column" />
		<ModuleColumn :col="4" :cols="12" title="Column" />
		<ModuleColumn :col="9" :cols="12" title="Column">
		<ModuleColumn :col="12" :cols="12" title="Column" />
		</ModuleColumn>
		<ModuleColumn :col="3" :cols="12" title="Column" />
		<ModuleColumn :col="10" :cols="12" title="Column" />
		<ModuleColumn :col="2" :cols="12" title="Column" />
		<ModuleColumn :col="11" :cols="12" title="Column" />
		<ModuleColumn :col="1" :cols="12" title="Column" />
		<ModuleColumn :col="12" :cols="12" title="Column" />
		-->
	</div>
</template>
<script setup lang="ts">
import ModuleColumn from "@/BlockBuilder/Components/Modules/Column.vue";
import ModuleSpace from "@/BlockBuilder/Components/Modules/Space.vue";
import EmptyContent from "@/BlockBuilder/Components/Content/Common/Empty.vue";
import { InstanceModule } from "@/types";
import { PropType } from "vue";

const props = defineProps({
	instances: {
		type: Array as PropType<InstanceModule[]>,
		required: true,
	},
})
</script>