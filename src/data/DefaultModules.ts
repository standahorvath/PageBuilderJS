import { SectionAttributeType } from "@/enums";
import { Module } from "@/types";
import { AdvancedTab } from "./CommonModuleTabs";
import { IconName } from "@/BlockBuilder/Utils/IconsMap";

export const DefaultModules: Module[] = [
  // Content tab
  {
    title: "Title",
    icon: IconName.H1Icon,
    id: "text",
    render: "<h1 style=\"font-size: {{fontSize}}px; color: {{color}}; text-align: {{align}}\">{{content}}</h1>",
    structure: {
      tabs: [
        {
          name: "Content",
          sections: [
            { name: "Main", attributes: [
              { id: "content", name: "Content", type: SectionAttributeType.Textarea, value: "Page title example" },
              { id: "align", name: "Text Align", type: SectionAttributeType.Select, value: "left", options: { left: "Left", center: "Center", right: "Right" } },
              { id: "color", name: "Text color", type: SectionAttributeType.Color, value: "#000000" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Rich Text",
    icon: IconName.Bars3CenterLeftIcon,
    id: "richtext",
    render: "<div style=\"font-size: {{fontSize}}px; color: {{color}}\">{{content}}</div>",
    structure: {
      tabs: [
        {
          name: "Content",
          sections: [
            { name: "Main", attributes: [
              { id: "content", name: "Content", type: SectionAttributeType.Textarea, value: "Lorem ipsum dolor sit amed" },
              { id: "fontSize", name: "Font size", type: SectionAttributeType.FontSize, value: 14 },
              { id: "color", name: "Text color", type: SectionAttributeType.Color, value: "#000000" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Quote",
    icon: IconName.BookOpenIcon,
    id: "quote",
    render: "<blockquote><p>{{quote}}</p><i>- {{author}}</i></blockquote>",
    structure: {
      tabs: [
        {
          name: "Quote",
          sections: [
            { name: "Main", attributes: [
              { id: "quote", name: "Quote text", type: SectionAttributeType.Textarea, value: "Be yourself; everyone else is already taken." },
              { id: "author", name: "Author", type: SectionAttributeType.Text, value: "Oscar Wilde" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "List",
    icon: IconName.ListBulletIcon,
    id: "list",
    render: "<h2>{{ title }}</h2><ul style='text-align:left;'>{% foreach:items %}<li style='color:{{ item.color }}'>{{ item.item }}</li>{% endforeach %}</ul>",
    structure: {
      tabs: [
        {
          name: "List",
          sections: [
            {
              name: "Title",
              attributes: [
                { id: "title", name: "Title", type: SectionAttributeType.Text, value: "List title" }
              ],
              type: SectionAttributeType.Text,
              value: "List title",
            },
            { name: "Items", attributes: [
              { 
                id: "items", 
                name: "Items (comma separated)", 
                type: SectionAttributeType.Repeater, 
                value: [
                  { item: "Item 1", color: "#fe1277" },
                  { item: "Item 2", color: "#125e00" },
                  { item: "Item 3", color: "#000000" }
                ],
                attributes: [
                  { id: "item", name: "Name", type: SectionAttributeType.Text, value: "" },
                  { id: "color", name: "Text color", type: SectionAttributeType.Color, value: "" }
                ]
              }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Table",
    icon: IconName.TableCellsIcon,
    id: "table",
    render: "<table border=\"1\">{% foreach:tableRows %}<tr>{% foreach:item.columns %}<td>{{ item }}</td>{% endforeach %}</tr>{% endforeach %}</table>",
    structure: {
      tabs: [
        {
          name: "Table",
          sections: [
            { name: "Data", attributes: [
              { id: "rows", name: "Rows", type: SectionAttributeType.Number, value: 2 },
              { id: "columns", name: "Columns", type: SectionAttributeType.Number, value: 2 }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Button",
    icon: IconName.RectangleStackIcon,
    id: "button",
    render: "<a href=\"javascript:void(0)\" style=\"border-radius:10px; background-color: {{backgroundColor}}; color: {{textColor}}; display: inline-block; padding: 10px 20px; text-decoration: none;\">{{label}}</a>",
    structure: {
      tabs: [
        {
          name: "General",
          sections: [
            { name: "Content", attributes: [
              { id: "label", name: "Button label", type: SectionAttributeType.Text, value: "Click me" },
              { id: "link", name: "Link", type: SectionAttributeType.Link, value: "" }
            ]},
            { name: "Style", attributes: [
              { id: "backgroundColor", name: "Background color", type: SectionAttributeType.Color, value: "#007bff" },
              { id: "textColor", name: "Text color", type: SectionAttributeType.Color, value: "#ffffff" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Badge",
    icon: IconName.TagIcon,
    id: "badge",
    render: "<span style=\"background-color: {{color}}; color: #fff; padding: 5px 10px; border-radius: 5px;\">{{text}}</span>",
    structure: {
      tabs: [
        {
          name: "Label",
          sections: [
            { name: "Badge", attributes: [
              { id: "text", name: "Text", type: SectionAttributeType.Text, value: "New" },
              { id: "color", name: "Color", type: SectionAttributeType.Color, value: "#ff0000" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },

  // Media tab
  {
    title: "Image",
    icon: IconName.PhotoIcon,
    id: "image",
    render: "<img src=\"{{src}}\" alt=\"{{alt}}\" width=\"{{width}}\" height=\"{{height}}\" />",
    structure: {
      tabs: [
        {
          name: "Image",
          sections: [
            { name: "Image", attributes: [
              { id: "src", name: "Image source", type: SectionAttributeType.Image, value: "" },
              { id: "alt", name: "Alt text", type: SectionAttributeType.Text, value: "" }
            ]},
            { name: "Size", attributes: [
              { id: "width", name: "Width (px)", type: SectionAttributeType.Number, value: 100 },
              { id: "height", name: "Height (px)", type: SectionAttributeType.Number, value: 100 }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Gallery",
    icon: IconName.RectangleGroupIcon,
    id: "gallery",
    render: "<div style=\"display: flex; gap: 5px;\">{% foreach:images %}<img src=\"{{ item }}\" style=\"max-width: 100px; max-height: 100px;\" />{% endforeach %}</div>",
    structure: {
      tabs: [
        {
          name: "Images",
          sections: [
            { name: "Gallery", attributes: [
              { id: "images", name: "Images", type: SectionAttributeType.Image, value: "" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Video",
    icon: IconName.VideoCameraIcon,
    id: "video",
    render: "<video controls style=\"max-width: 100%\"><source src=\"{{url}}\" type=\"video/mp4\">Your browser does not support the video tag.</video>",
    structure: {
      tabs: [
        {
          name: "Video",
          sections: [
            { name: "Source", attributes: [
              { id: "url", name: "Video URL", type: SectionAttributeType.Link, value: "" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Audio",
    icon: IconName.SpeakerWaveIcon,
    id: "audio",
    render: "<audio controls><source src=\"{{src}}\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>",
    structure: {
      tabs: [
        {
          name: "Audio",
          sections: [
            { name: "Audio", attributes: [
              { id: "src", name: "Audio Source", type: SectionAttributeType.Link, value: "" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Slider",
    icon: IconName.CodeBracketSquareIcon,
    id: "slider",
    render: "<div class=\"slider\">{% foreach:slides %}<img src=\"{{ item }}\" style=\"max-width: 100%\" />{% endforeach %}</div>",
    structure: {
      tabs: [
        {
          name: "Slider",
          sections: [
            { name: "Slides", attributes: [
              { id: "slides", name: "Slides (images)", type: SectionAttributeType.Image, value: "" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Space",
    icon: IconName.ChevronUpDownIcon,
    id: "space",
    structure: {
      tabs: [
        {
          name: "Spacing",
          sections: [
            { name: "Size", attributes: [
              { id: "size", name: "Size (px)", type: SectionAttributeType.Number, value: 20 }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },

  // Structure tab
  {
    title: "Column",
    icon: IconName.ViewColumnsIcon,
    childrenable: true,
    id: "column",
    structure: {
      tabs: [
        {
          name: "General",
          sections: [
            { name: "Type of space", attributes: [
              { id: "type", name: "Select type", type: SectionAttributeType.Select, value: "space", options: { line: "Line", deliminer: "Deliminer", space: "Space" } }
            ]},
            { name: "Size", attributes: [
              { id: "size", name: "Size", type: SectionAttributeType.Number, value: 6 }
            ]},
            { name: "Color", attributes: [
              { id: "color", name: "Color of separator", type: SectionAttributeType.Color, value: "#000000" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  },
  {
    title: "Container",
    icon: IconName.ArchiveBoxIcon,
    childrenable: true,
    id: "container",
    render: "<div style=\"max-width: {{width}}px; padding: {{padding}}px; background-color: {{backgroundColor}};\">{{developer-css-attribute}}</div>",
    structure: {
      tabs: [
        {
          name: "General",
          sections: [
            { name: "Size", attributes: [
              { id: "width", name: "Max width (px)", type: SectionAttributeType.Number, value: 1200 },
              { id: "padding", name: "Padding (px)", type: SectionAttributeType.Number, value: 20 }
            ]},
            { name: "Background", attributes: [
              { id: "backgroundColor", name: "Background color", type: SectionAttributeType.Color, value: "#ffffff" }
            ]}
          ]
        },
        AdvancedTab
      ]
    }
  }
] as Module[];