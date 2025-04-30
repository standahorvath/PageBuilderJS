<template>
	<Base :title="module.title">
	<Tabs :tabs="tabs" v-model:modelValue="activeTab">
		<Accordition v-for="section in activeTabData?.sections" :key="section.name" :title="section.name" v-model="openedSections[section.name]">
			<div v-for="attribute in section.attributes">
				<Attribute :attribute="attribute" />
			</div>
		</Accordition>
	</Tabs>
	</Base>
</template>
<script setup lang="ts">
import Base from "@/BlockBuilder/Components/Modal/Base.vue";
import { InstanceModule, Module } from "@/types";
import { computed, onMounted, PropType, ref } from "vue";
import Tabs from "@/BlockBuilder/Components/Modal/Common/Tabs.vue";
import Accordition from "@/BlockBuilder/Components/Modal/Common/Accordition.vue";
import Attribute from "@/BlockBuilder/Components/Modal/Common/Attribute.vue";

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

const openedSections = ref({} as Record<string, boolean>)

const activeTabData = computed(() => {
	return props.module.structure.tabs.find(tab => tab.name === activeTab.value)
})

const activeTab = ref(null as string | null)

onMounted(() => {
	tabs.value.forEach(ftab => {
		const tabData = props.module.structure.tabs.find(tab => tab.name === ftab.title)
		if(tabData?.sections && tabData?.sections.length) {
			const section = tabData.sections[0]
			openedSections.value[section.name] = true
		}
	})
	if (!tabs.value.length) return
	activeTab.value = tabs.value[0].id
})

</script>