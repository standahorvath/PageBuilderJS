---
outline: deep
title: Demo
aside: false
---

# Demo

Below is a live preview of how the PageBuilderJS component looks and behaves. This is a static example embedding the Web Component directly.

## 📦 Minimal Integration

You can include the builder directly into any HTML page:

```html
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/pagebuilderjs@1.0.9/dist/block-builder.umd.js'
  const builder = document.createElement('block-builder')

  // Content for the builder
  // Usually, this will be fetched from a server or a database
  const content = []

  // Modules (blocks) configuration
  // Each module can have its own structure and configuration
  const modules = [
    	{
        title: "Space",
        icon: "ChevronUpDownIcon",
        id: "space",
        structure: {
          tabs: [
            {
              name: "Spacing",
              sections: [
                {
                  name: "Size", attributes: [
                    { id: "size", name: "Size (px)", type: "number", value: 20 }
                  ]
                }
              ]
            },
            
          ]
        }
      },
  ]

  // Toolbar configuration
  // The toolbar is a set of tabs, each tab can have multiple tools
  const toolbar = {
    tabs: [
      {
        id: "media",
        title: "Media",
        icon: "image",
        tools: [
          "space"
        ]
      },
    ]
  }

  builder.modules = modules
  builder.toolbar = toolbar
  builder.content = content


  builder.addEventListener('onTemplatesUpdate', (event) => {
    console.log('Templates updated:', event.detail)
    // TODO: Save the templates to a server or a database
  })

  builder.addEventListener('onUpdate', (event) => {
    console.log('Blocks content changed:', event.detail)
    // TODO: Save the blocks content to a server or a database
  })

  document.body.appendChild(builder)
</script>
```
Show result on [Codepen ->](https://codepen.io/standatonakodi/pen/EaaBwZq)

## ▶️ Live Preview
Link to the demo page: [PageBuilderJS Demo](/PageBuilderJS/demo-page.html){target="_blank"}

<iframe src="/PageBuilderJS/demo-page.html" width="100%" height="800px" frameborder="0"></iframe>
