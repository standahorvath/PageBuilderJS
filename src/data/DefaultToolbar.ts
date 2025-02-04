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