<template>
	<Base :title="module.title">
		<Tabs :tabs="tabs" v-model:modelValue="activeTab" />
		<Accordition v-for="section in activeTabData?.sections" :key="section.name" :title="section.name">
			<div v-for="attribute in section.attributes">
				{{  attribute.name }}
			</div>
		</Accordition>
	</Base>
</template>
<script setup lang="ts">
import Base from "@/BlockBuilder/Components/Modal/Base.vue";
import { InstanceModule, Module } from "@/types";
import { computed, onMounted, PropType, ref } from "vue";
import Tabs from "@/BlockBuilder/Components/Modal/Common/Tabs.vue";
import Accordition from "@/BlockBuilder/Components/Modal/Common/Accordition.vue";

const props = defineProps({
	instance: {
		type: Object as PropType<InstanceModule>,
		required: true,
	},
	module: {
		type: Object as PropType<Module>,
		required: true,
	},
})

const tabs = computed(() => {
	return props.module.structure.tabs.map(tab => ({
		id: tab.name,
		title: tab.name,
	}))
})

const activeTabData = computed(() => {
	return props.module.structure.tabs.find(tab => tab.name === activeTab.value)
})

const activeTab = ref(null as string | null)

onMounted(() => {
	if(!tabs.value.length) return
	activeTab.value = tabs.value[0].id
})

</script>