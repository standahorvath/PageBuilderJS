# Modules

Modules are the core building blocks in PageBuilderJS. Each module defines a reusable content block that can be visually configured and inserted into the page using the drag & drop editor.

## 🧱 What is a Module?

A **Module** is a declarative object that describes:

* How the block looks in our editor (`render` template)
* Which attributes it exposes for configuration (`text`, `color`, `image`, etc.)
* How it's structured (tabs, sections, fields)
* What `icon` and `title` are shown in the builder UI

Modules can be as simple as a button or as complex as a multi-column layout container.

## 🧩 Module Structure

Each module follows this basic structure:

```ts
export type Module = {
  id: string;
  title: string;
  icon: string;
  render?: string;
  structure: {
    tabs: ModuleTab[];
  };
  childrenable?: boolean;
};
```

Where:

* `id`: unique identifier (e.g. "button")
* `title`: name shown in UI (e.g. "Button")
* `icon`: emoji from predefined list or url to an image
* `render`: HTML template using [TemplifyJS](https://github.com/standahorvath/TemplifyJS)
* `structure`: tabs and form fields
* `childrenable`: allows nesting other blocks inside

### Tab, Section & Attributes

```ts
type ModuleTab = {
  name: string;
  sections: ModuleSection[];
};

type ModuleSection = {
  name: string;
  attributes: ModuleAttribute[];
};

type ModuleAttribute = {
  id: string;
  name: string;
  type: SectionAttributeType;
  value: any;
};
```

Supported `type` values are like:

* `text`, `textarea`, `color`, `number`, `select`, `image`, `link`, `repeater`, etc.

---

## 📃 Example Modules

### Button Module

```ts
{
  id: 'button',
  title: 'Button',
  icon: 'RectangleStackIcon',
  render: '<button style="background-color: {{backgroundColor}}; color: {{textColor}}">{{label}}</button>',
  structure: {
    tabs: [
      {
        name: 'Content',
        sections: [
          {
            name: 'Settings',
            attributes: [
              { id: 'label', name: 'Label', type: 'text', value: 'Click me' },
              { id: 'backgroundColor', name: 'Background', type: 'color', value: '#000000' },
              { id: 'textColor', name: 'Text Color', type: 'color', value: '#ffffff' }
            ]
          }
        ]
      }
    ]
  }
}
```

---

### Title Module

```ts
{
  id: 'title',
  title: 'Title',
  icon: 'H1Icon',
  render: '<h1 style="text-align: {{align}}; color: {{color}}">{{content}}</h1>',
  structure: {
    tabs: [
      {
        name: 'Content',
        sections: [
          {
            name: 'Main',
            attributes: [
              { id: 'content', name: 'Text', type: 'text', value: 'My Title' },
              { id: 'align', name: 'Alignment', type: 'select', value: 'left', options: { left: 'Left', center: 'Center', right: 'Right' } },
              { id: 'color', name: 'Text color', type: 'color', value: '#000000' }
            ]
          }
        ]
      }
    ]
  }
}
```

### Space (Built-in Module)

```ts
{
  id: 'space',
  title: 'Space',
  icon: 'ChevronUpDownIcon',
  structure: {
    tabs: [
      {
        name: 'Spacing',
        sections: [
          {
            name: 'Size',
            attributes: [
              { id: 'size', name: 'Size (px)', type: 'number', value: 20 }
            ]
          }
        ]
      }
    ]
  }
}
```

### Column (Built-in Module)

```ts
{
  id: 'column',
  title: 'Column',
  icon: 'ViewColumnsIcon',
  childrenable: true,
  structure: {
    tabs: [
      {
        name: 'General',
        sections: [
          {
            name: 'Settings',
            attributes: [
              { id: 'size', name: 'Size', type: 'number', value: 6 },
              { id: 'type', name: 'Type', type: 'select', value: 'space', options: { space: 'Space', line: 'Line', deliminer: 'Deliminer' } }
            ]
          }
        ]
      }
    ]
  }
}
```

### List with Repeater

```ts
{
  id: 'list',
  title: 'List',
  icon: 'ListBulletIcon',
  render: `
    <h2>{{ title }}</h2>
    <ul style="text-align:left;">
      {% foreach:items %}
        <li style="color:{{ item.color }}">{{ item.item }}</li>
      {% endforeach %}
    </ul>
  `,
  structure: {
    tabs: [
      {
        name: 'List',
        sections: [
          {
            name: 'Title',
            attributes: [
              { id: 'title', name: 'Title', type: 'text', value: 'List title' }
            ]
          },
          {
            name: 'Items',
            attributes: [
              {
                id: 'items',
                name: 'Items',
                type: 'repeater',
                value: [
                  { item: 'Item 1', color: '#ff0000' },
                  { item: 'Item 2', color: '#00ff00' }
                ],
                attributes: [
                  { id: 'item', name: 'Text', type: 'text', value: '' },
                  { id: 'color', name: 'Color', type: 'color', value: '' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
## 📁 Full Module List

For a full list of example modules, refer to the source file in the repository:

👉 [DefaultModules.ts on GitHub](https://github.com/standahorvath/PageBuilderJS/blob/main/src/data/DefaultModules.ts)


## 🧠 Tips

* Use short and unique `id` values
* Group attributes in meaningful tabs/sections
* Use `childrenable: true` to allow nesting blocks (like Container or Column)
* Use `render` only for live preview – not full rendering logic

