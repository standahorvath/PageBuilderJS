<template>
	<Base :title="module.title" @save="onSave" @close="onClose">
		<Tabs :tabs="tabs" v-model:modelValue="activeTab" />
		<div class="bb-modal__content__inner">
		<Accordition v-for="section in activeTabData?.sections" :key="section.name" :title="section.name">
			<div v-for="attribute in section.attributes" :key="attribute.name">
				<Attribute :attribute="attribute" :data="getAttributeData(attribute.id) ?? null" />
			</div>
		</Accordition>
		</div>
	</Base>
</template>
<script setup lang="ts">
import Base from "@/BlockBuilder/Components/Modal/Base.vue";
import { InstanceModule, Module, ModuleTab } from "@/types";
import { computed, onMounted, PropType, ref } from "vue";
import Tabs from "@/BlockBuilder/Components/Modal/Common/Tabs.vue";
import Accordition from "@/BlockBuilder/Components/Modal/Common/Accordition.vue";
import Attribute from "@/BlockBuilder/Components/Modal/Common/Attribute.vue";

const emits = defineEmits(["close", "save"]);

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

const activeTabData = computed((): ModuleTab | undefined => {
	return props.module.structure.tabs.find(tab => tab.name === activeTab.value)
})

const activeTab = ref(null as string | null)

const getAttributeData = (attributeName: string) => {
	return props.instance.structureData.find(data => data.id === attributeName)
}

onMounted(() => {
	if(!tabs.value.length) return
	activeTab.value = tabs.value[0].id
})

const onClose = () => {
	emits("close");
}
const onSave = () => {
	emits("save");
}

</script>