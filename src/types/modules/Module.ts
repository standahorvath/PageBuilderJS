import { SectionAttributeType } from "@/enums";

export type Module = {
	title: string;
	id: string;
	render?: string;
	structure: {
		tabs: ModuleTab[];
	};
	icon: string;
	childrenable?: boolean;
}
export type ModuleTab = {
	name: string;
	sections: ModuleSection[];
}
export type ModuleSection = {
	name: string;
	attributes: ModuleAttribute[];
	order?: number;
}
export type ModuleAttribute = {
	id: string;
	name: string;
	description?: string;
	tooltip?: string;
	type: SectionAttributeType;
	value: any;
	default?: any;
	order?: number;
	options?: Record<string, string>;
	attributes?: ModuleAttribute[];
}

export type InputLinkOption = {
	value: string
	label: string
}

export type InputLinkCategory = {
	value: string
	label: string
	links: InputLinkOption[]
}

export type InputLinkModelManual = {
	category: 'manual'
	url: string
	openInNewWindow: boolean
}

export type InputLinkModelSelected = {
	category: string
	link: string
	openInNewWindow: boolean
}

export type InputLinkModel = InputLinkModelManual | InputLinkModelSelected