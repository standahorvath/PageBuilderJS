/**
 * Convert kebab-case to CamelCase
 * @param str Input string for conversion
 * @returns 
 */
export const kebabCaseToCamelCase = (str: string) => {
	// CamelCase with uppercase first letter
	return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^[a-z]/, (g) => g.toUpperCase());
}