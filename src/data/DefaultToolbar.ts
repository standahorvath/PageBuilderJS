import { Toolbar } from "@/types";

export const DefaultToolbar: Toolbar = {
  tabs: [
    {
      id: "content",
      title: "Content",
      icon: "text",
      tools: [
        "text",        // Title
        "richtext",    // Rich Text
        "quote",       // Quote
        "list",        // List
        "table",       // Table
        "button",      // Button
        "badge"        // Badge
      ]
    },
    {
      id: "media",
      title: "Media",
      icon: "image",
      tools: [
        "image",
        "gallery",
        "video",
        "audio",
        "slider",
        "spacer"
      ]
    },
    {
      id: "structure",
      title: "Structure",
      icon: "column",
      tools: [
        "column",
        //"container",
      ]
    }
  ]
} as Toolbar;