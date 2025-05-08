import { AttributeData, Module } from "@/types";

export const getDefaultData = (module: Module): AttributeData[] => {
	const defaultData: AttributeData[] = []
	module.structure.tabs.forEach((tab) => {
		tab.sections.forEach((section) => {
		section.attributes.forEach((attribute) => {
			defaultData.push({
				id: attribute.id,
				value: attribute.value ?? null,
			})
		})
		})
	})
  	return defaultData
}