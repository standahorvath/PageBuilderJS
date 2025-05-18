import { InstanceModule } from "@/types";

export const nonce = () => {
	return Math.random().toString(36).substring(2)
}

/**
 * This function finds the parent of a given instance in the list of instances.
 * It checks each instance and its children recursively to find the parent.
 * @param instances - The list of instances to search
 * @param instance - The instance whose parent is to be found
 * @returns The parent instance or null if not found
 */
export const findParent = (instances: InstanceModule[], instance: InstanceModule): InstanceModule | null => {
	for (const potentialParent of instances) {
		if (!potentialParent.children) continue

		if (potentialParent.children.some((child: InstanceModule) => child.nonce === instance.nonce)) {
			return potentialParent
		}

		const foundInChild = findParent(potentialParent.children, instance)
		if (foundInChild) return foundInChild
	}
	return null
}

/**
 * This function creates a deep copy of the given instance.
 * It generates a new nonce for the copied instance and recursively copies its children.
 * The structureData is also deep copied to ensure that the original instance is not modified.
 * @param instance - The instance to be copied
 * @returns A deep copy of the instance
 */
export const deepCopy = (instance: InstanceModule): InstanceModule => {
	return {
		nonce: nonce(),
		id: instance.id,
		module: instance.module,
		children: instance.children ? instance.children.map(deepCopy) : [],
		structureData: JSON.parse(JSON.stringify(instance.structureData)),
	}
}