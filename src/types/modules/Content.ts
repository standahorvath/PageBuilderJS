import { Module } from "./Module";

export type InstanceModule = ModuleData & {
	nonce: string;
	module: Module;
	children?: InstanceModule[];
}

export type AttributeData = {
	id: string;
	value: any;
}

export type ModuleData = {
	id: string;
	structureData: AttributeData[];
	children?: ModuleData[];
}