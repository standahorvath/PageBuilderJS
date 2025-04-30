<template>
	<Base :title="module.title" @save="onSave" @close="onClose">
		<Tabs :tabs="tabs" v-model:modelValue="activeTab" />
		<div class="bb-modal__content__inner">
		<Accordition v-for="section in activeTabData?.sections" :key="section.name" :title="section.name" v-model="openedSections[section.name]">
			<div v-for="attribute in section.attributes"  :key="attribute.id + '_' + instanceCopy.id">
				<Attribute  :attribute="attribute" :data="attributeDataMap[attribute.id] ?? null" @update:modelValue="onAttributeUpdate(attribute, $event)"  />
			</div>
		</Accordition>
		</div>
	</Base>
</template>
<script setup lang="ts">
import Base from "@/BlockBuilder/Components/Modal/Base.vue";
import { AttributeData, InstanceModule, Module, ModuleAttribute, ModuleTab } from "@/types";
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

const instanceCopy = ref(JSON.parse(JSON.stringify(props.instance)) as InstanceModule)

const tabs = computed(() => {
	return props.module.structure.tabs.map(tab => ({
		id: tab.name,
		title: tab.name,
	}))
})
const openedSections = ref({} as Record<string, boolean>)
const activeTabData = computed((): ModuleTab | undefined => {
	return props.module.structure.tabs.find(tab => tab.name === activeTab.value)
})

const activeTab = ref(null as string | null)

const attributeDataMap = computed((): Record<string, AttributeData> => {
  const map: Record<string, any> = {};
  for (const item of instanceCopy.value.structureData) {
    map[item.id] = item;
  }
  return map;
});

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

const onClose = () => {
	emits("close");
}
const onSave = () => {
	emits("save", instanceCopy.value);
}

const onAttributeUpdate = (attribute: ModuleAttribute, value: any) => {
	if(!attribute){
		return
	}
	if (typeof attributeDataMap.value[attribute.id] !== 'undefined') {
		for(const tData in instanceCopy.value.structureData){
			if(instanceCopy.value.structureData[tData].id === attribute.id){
				instanceCopy.value.structureData[tData].value = value
			}
		}
	} else {
		instanceCopy.value.structureData.push({
			id: attribute.id,
			value: value,
		})
	}
}

</script>