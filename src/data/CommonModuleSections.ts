import { SectionAttributeType } from "@/enums";
import { ModuleSection } from "@/types";

export const DeveloperSection = {
	name: 'HTML/CSS Settings',
	attributes: [
		{
			name: 'ID Attribute',
			description: 'ID attribute for a root element of this module',
			type: SectionAttributeType.Text,
			value: '',
		},
		{
			name: 'Custom CSS',
			description: 'Custom CSS for this module',
			type: SectionAttributeType.Textarea,
			value: '',
		},
	],
} as ModuleSection;

export const ResponsiveSection = {
	name: 'Responsive Settings',
	attributes: [
		{
			name: 'Hide on Desktop',
			description: 'Hide this module on desktop',
			type: SectionAttributeType.Checkbox,
			value: false,
		},
		{
			name: 'Hide on Tablet',
			description: 'Hide this module on tablet',
			type: SectionAttributeType.Checkbox,
			value: false,
		},
		{
			name: 'Hide on Mobile',
			description: 'Hide this module on mobile',
			type: SectionAttributeType.Checkbox,
			value: false,
		},
	],
} as ModuleSection;