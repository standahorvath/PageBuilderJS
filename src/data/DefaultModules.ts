import { SectionAttributeType } from "@/enums";
import { Module } from "@/types";
import { AdvancedTab } from "./CommonModuleTabs";

export const DefaultModules = [
	{
		title: 'Space',
		icon: 'space',
		id: 'space',
		structure: {
			tabs: [
				{
					name: 'General',
					sections: [
						{
							name: 'Type of space',
							attributes: [
								{
									name: 'Select type',
									type: SectionAttributeType.Select,
									value: 'space',
									options: {
										line: 'Line',
										deliminer: 'Deliminer',
										space: 'Space',
									}
								},
							],
						},
						{
							name: 'Size',
							attributes: [
								{
									name: 'Size',
									description: 'Size of the space in pixels',
									type: SectionAttributeType.Number,
									value: 1,
								},
							],
						},
						{
							name: 'Color',
							attributes: [
								{
									name: 'Color',
									description: 'Color of the separator',
									type: SectionAttributeType.Color,
									value: '#000000',
								},
							],
						},
					],
				},
				AdvancedTab
			],
		},
	}
] as Module[];