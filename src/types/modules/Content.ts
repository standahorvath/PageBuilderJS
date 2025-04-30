export type InstanceModule = ModuleData & {
	nonce: string;
}

export type AttributeData = {
	id: string;
	value: any;
}

export type ModuleData = {
	id: string;
	structureData: AttributeData[];
	children?: InstanceModule[];
}
