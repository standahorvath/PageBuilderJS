import { Toolbar } from "@/types";

export const DefaultToolbar = {
	tabs: [
		{
			id: "layout",
			icon: "layout",
			title: "Layout",
			tools: [
				"column",
			]
		},
		{
			id: "main",
			icon: "main",
			title: "Main",
			tools: [
				"space"
			]
		},
	]
} as Toolbar;

export const ExtendedToolbar = {
	tabs: [
		{
			id: "AdvancedTab",
			icon: "AdvancedTab",
			title: "AdvancedTab",
			tools: [
				"text",
				"richtext",
				"image",
				"video",
				"audio",
				"button",
				"icon",
				"list",
				"table",
				"spacer",
			]
		},
	]
} as Toolbar;