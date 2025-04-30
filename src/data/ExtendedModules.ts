
import { SectionAttributeType } from "@/enums";
import { AdvancedTab } from "./CommonModuleTabs";
import { Module } from "@/types";

export const ExtendedModules = [
	{
	  title: "Text",
	  icon: "text",
	  id: "text",
	  structure: {
		tabs: [
		  {
			name: "Content",
			sections: [
			  {
				name: "Main",
				attributes: [
				  {
					id: "content",
					name: "Content",
					type: SectionAttributeType.Textarea,
					value: ""
				  },
				  {
					id: "fontSize",
					name: "Font size",
					type: SectionAttributeType.FontSize,
					value: 14
				  },
				  {
					id: "color",
					name: "Text color",
					type: SectionAttributeType.Color,
					value: "#000000"
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Rich Text",
	  icon: "richtext",
	  id: "richtext",
	  structure: {
		tabs: [
		  {
			name: "Content",
			sections: [
			  {
				name: "Main",
				attributes: [
				  {
					id: "content",
					name: "Content",
					type: SectionAttributeType.Textarea,
					value: ""
				  },
				  {
					id: "fontSize",
					name: "Font size",
					type: SectionAttributeType.FontSize,
					value: 14
				  },
				  {
					id: "color",
					name: "Text color",
					type: SectionAttributeType.Color,
					value: "#000000"
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Quote",
	  icon: "quote",
	  id: "quote",
	  structure: {
		tabs: [
		  {
			name: "Quote",
			sections: [
			  {
				name: "Main",
				attributes: [
				  {
					id: "quote",
					name: "Quote text",
					type: SectionAttributeType.Textarea,
					value: ""
				  },
				  {
					id: "author",
					name: "Author",
					type: SectionAttributeType.Text,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "List",
	  icon: "list",
	  id: "list",
	  structure: {
		tabs: [
		  {
			name: "List",
			sections: [
			  {
				name: "Items",
				attributes: [
				  {
					id: "items",
					name: "Items (comma separated)",
					type: SectionAttributeType.Text,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Table",
	  icon: "table",
	  id: "table",
	  structure: {
		tabs: [
		  {
			name: "Table",
			sections: [
			  {
				name: "Data",
				attributes: [
				  {
					id: "rows",
					name: "Rows",
					type: SectionAttributeType.Number,
					value: 2
				  },
				  {
					id: "columns",
					name: "Columns",
					type: SectionAttributeType.Number,
					value: 2
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Image",
	  icon: "image",
	  id: "image",
	  structure: {
		tabs: [
		  {
			name: "Image",
			sections: [
			  {
				name: "Image",
				attributes: [
				  {
					id: "src",
					name: "Image source",
					type: SectionAttributeType.Image,
					value: ""
				  },
				  {
					id: "alt",
					name: "Alt text",
					type: SectionAttributeType.Text,
					value: ""
				  }
				]
			  },
			  {
				name: "Size",
				attributes: [
				  {
					id: "width",
					name: "Width (px)",
					type: SectionAttributeType.Number,
					value: 100
				  },
				  {
					id: "height",
					name: "Height (px)",
					type: SectionAttributeType.Number,
					value: 100
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Gallery",
	  icon: "gallery",
	  id: "gallery",
	  structure: {
		tabs: [
		  {
			name: "Images",
			sections: [
			  {
				name: "Gallery",
				attributes: [
				  {
					id: "images",
					name: "Images",
					type: SectionAttributeType.Image,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Video",
	  icon: "video",
	  id: "video",
	  structure: {
		tabs: [
		  {
			name: "Video",
			sections: [
			  {
				name: "Source",
				attributes: [
				  {
					id: "url",
					name: "Video URL",
					type: SectionAttributeType.Link,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Audio",
	  icon: "audio",
	  id: "audio",
	  structure: {
		tabs: [
		  {
			name: "Audio",
			sections: [
			  {
				name: "Audio",
				attributes: [
				  {
					id: "src",
					name: "Audio Source",
					type: SectionAttributeType.Link,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Slider",
	  icon: "slider",
	  id: "slider",
	  structure: {
		tabs: [
		  {
			name: "Slider",
			sections: [
			  {
				name: "Slides",
				attributes: [
				  {
					id: "slides",
					name: "Slides (images)",
					type: SectionAttributeType.Image,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Button",
	  icon: "button",
	  id: "button",
	  structure: {
		tabs: [
		  {
			name: "General",
			sections: [
			  {
				name: "Content",
				attributes: [
				  {
					id: "label",
					name: "Button label",
					type: SectionAttributeType.Text,
					value: "Click me"
				  },
				  {
					id: "link",
					name: "Link",
					type: SectionAttributeType.Link,
					value: ""
				  }
				]
			  },
			  {
				name: "Style",
				attributes: [
				  {
					id: "backgroundColor",
					name: "Background color",
					type: SectionAttributeType.Color,
					value: "#007bff"
				  },
				  {
					id: "textColor",
					name: "Text color",
					type: SectionAttributeType.Color,
					value: "#ffffff"
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Link List",
	  icon: "linklist",
	  id: "linklist",
	  structure: {
		tabs: [
		  {
			name: "Links",
			sections: [
			  {
				name: "Links",
				attributes: [
				  {
					id: "links",
					name: "Links (JSON)",
					type: SectionAttributeType.Textarea,
					value: "[]"
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Menu",
	  icon: "menu",
	  id: "menu",
	  structure: {
		tabs: [
		  {
			name: "Navigation",
			sections: [
			  {
				name: "Structure",
				attributes: [
				  {
					id: "items",
					name: "Menu Items",
					type: SectionAttributeType.Textarea,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Breadcrumb",
	  icon: "breadcrumb",
	  id: "breadcrumb",
	  structure: {
		tabs: [
		  {
			name: "Navigation",
			sections: [
			  {
				name: "Path",
				attributes: [
				  {
					id: "crumbs",
					name: "Crumbs",
					type: SectionAttributeType.Textarea,
					value: ""
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Pagination",
	  icon: "pagination",
	  id: "pagination",
	  structure: {
		tabs: [
		  {
			name: "Paging",
			sections: [
			  {
				name: "Settings",
				attributes: [
				  {
					id: "perPage",
					name: "Items per page",
					type: SectionAttributeType.Number,
					value: 10
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Divider",
	  icon: "divider",
	  id: "divider",
	  structure: {
		tabs: [
		  {
			name: "Design",
			sections: [
			  {
				name: "Style",
				attributes: [
				  {
					id: "color",
					name: "Divider color",
					type: SectionAttributeType.Color,
					value: "#cccccc"
				  },
				  {
					id: "height",
					name: "Height (px)",
					type: SectionAttributeType.Number,
					value: 1
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Spacer",
	  icon: "spacer",
	  id: "spacer",
	  structure: {
		tabs: [
		  {
			name: "Spacing",
			sections: [
			  {
				name: "Size",
				attributes: [
				  {
					id: "size",
					name: "Size (px)",
					type: SectionAttributeType.Number,
					value: 20
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Icon",
	  icon: "icon",
	  id: "icon",
	  structure: {
		tabs: [
		  {
			name: "Design",
			sections: [
			  {
				name: "Icon",
				attributes: [
				  {
					id: "name",
					name: "Icon name",
					type: SectionAttributeType.Text,
					value: "star"
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Badge",
	  icon: "badge",
	  id: "badge",
	  structure: {
		tabs: [
		  {
			name: "Label",
			sections: [
			  {
				name: "Badge",
				attributes: [
				  {
					id: "text",
					name: "Text",
					type: SectionAttributeType.Text,
					value: "New"
				  },
				  {
					id: "color",
					name: "Color",
					type: SectionAttributeType.Color,
					value: "#ff0000"
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	},
	{
	  title: "Card",
	  icon: "card",
	  id: "card",
	  structure: {
		tabs: [
		  {
			name: "Card",
			sections: [
			  {
				name: "Content",
				attributes: [
				  {
					id: "title",
					name: "Title",
					type: SectionAttributeType.Text,
					value: "Card title"
				  },
				  {
					id: "image",
					name: "Image",
					type: SectionAttributeType.Image,
					value: ""
				  },
				  {
					id: "text",
					name: "Text",
					type: SectionAttributeType.Textarea,
					value: "Some content here."
				  }
				]
			  }
			]
		  },
		  AdvancedTab
		]
	  }
	}
  ] as Module[];