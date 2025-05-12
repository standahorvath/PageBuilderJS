import { InstanceModule } from "./Content";

export type HistoryEntry = {
	snapshot: InstanceModule[];
	timestamp: number;
	action?: string;
}