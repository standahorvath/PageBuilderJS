export type InstanceModule = ModuleData & {
	nonce: string;
}

export type AttributeData = {
	name: string;
	value: any;
}

export type ModuleData = {
	id: string;
	structureData: AttributeData[];
	children?: ModuleData[];
}
