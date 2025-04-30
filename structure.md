# Specification: Module Data Model

This documentation describes the data model structure for modules used in the system. It includes type definitions, properties, usage examples, and attribute specifications.

---

## 📦 Module (`Module`)

### Description
A `Module` object represents an individual block with its own configuration structure.

### Properties
| Name      | Type         | Required | Description |
|-----------|--------------|----------|-------------|
| `title`   | `string`     | ✅       | Display name of the module |
| `id`      | `string`     | ✅       | Unique module identifier |
| `icon`    | `string`     | ✅       | Icon representing the module |
| `structure` | `object`   | ✅       | Structure of tabs, sections, and attributes |
| `order`   | `number?`    | ❌       | Optional display order |

### Example
```ts
{
  title: 'Space',
  id: 'space',
  icon: 'space',
  structure: {
    tabs: [ /* see below */ ]
  }
}
```

---

## 🗂️ Tab (`ModuleTab`)

### Description
A tab contains groups of attributes organized into sections.

### Properties
| Name      | Type                  | Required | Description |
|-----------|-----------------------|----------|-------------|
| `name`    | `string`              | ✅       | Tab name |
| `sections`| `ModuleSection[]`     | ✅       | Array of sections with attributes |

---

## 📑 Section (`ModuleSection`)

### Description
Each section groups related attributes together.

### Properties
| Name      | Type                    | Required | Description |
|-----------|-------------------------|----------|-------------|
| `name`    | `string`                | ✅       | Section name |
| `attributes`| `ModuleAttribute[]`   | ✅       | Attributes in the section |
| `order`   | `number?`               | ❌       | Optional display order |

---

## 🧩 Attribute (`ModuleAttribute`)

### Description
Defines a specific input element for the UI.

### Properties
| Name         | Type                          | Required | Description |
|--------------|-------------------------------|----------|-------------|
| `id`         | `string`                      | ✅       | Unique attribute identifier |
| `name`       | `string`                      | ✅       | Display name |
| `description`| `string?`                     | ❌       | Description or tooltip |
| `tooltip`    | `string?`                     | ❌       | Additional explanation |
| `type`       | `SectionAttributeType`        | ✅       | Value type |
| `value`      | `any`                         | ✅       | Default value |
| `order`      | `number?`                     | ❌       | Optional display order |
| `options`    | `Record<string, string>?`     | ❌       | Options for select/radio types |

---

## 🎛️ Supported types (`SectionAttributeType`)

```ts
export enum SectionAttributeType {
  Color = 'color',
  Number = 'number',
  Text = 'text',
  Textarea = 'textarea',
  Select = 'select',
  Checkbox = 'checkbox',
  DateTime = 'datetime',
  FontSize = 'font-size',
  Link = 'link',
  Image = 'image',
  Radio = 'radio',
  Range = 'range',
}
```

---

## 🔍 Examples

### Module `Space`
```ts
{
  title: 'Space',
  icon: 'space',
  id: 'space',
  structure: {
    tabs: [
      {
        name: 'General',
        sections: [
          {
            name: 'Appearance',
            attributes: [
              {
                id: 'type',
                name: 'Select type',
                type: SectionAttributeType.Select,
                value: 'space',
                options: {
                  line: 'Line',
                  deliminer: 'Deliminer',
                  space: 'Space',
                }
              },
              {
                id: 'size',
                name: 'Size',
                description: 'Size of the space in pixels',
                type: SectionAttributeType.Number,
                value: 1,
              },
              {
                id: 'color',
                name: 'Color',
                description: 'Color of the separator',
                type: SectionAttributeType.Color,
                value: '#000000',
              },
            ],
          },
        ],
      },
      AdvancedTab
    ],
  },
}
```

### Module `Column`
```ts
{
  title: 'Column',
  icon: 'column',
  id: 'column',
  structure: {
    tabs: [
      {
        name: 'General',
        sections: [
          {
            name: 'Type of space',
            attributes: [
              {
                id: 'type',
                name: 'Select type',
                type: SectionAttributeType.Select,
                value: 'space',
                options: {
                  line: 'Line',
                  deliminer: 'Deliminer',
                  space: 'Space',
                }
              },
            ],
          },
          {
            name: 'Size',
            attributes: [
              {
                id: 'size',
                name: 'Size',
                description: 'Size of the space in pixels',
                type: SectionAttributeType.Number,
                value: 1,
              },
            ],
          },
          {
            name: 'Color',
            attributes: [
              {
                id: 'color',
                name: 'Color',
                description: 'Color of the separator',
                type: SectionAttributeType.Color,
                value: '#000000',
              },
            ],
          },
        ],
      },
      AdvancedTab
    ],
  },
}
```

---

## 🧠 Notes
- `AdvancedTab` is a predefined tab shared across modules.
- The `order` property is optional but useful for fine-tuned UI arrangement.
- The `options` field is used only for types like `select`, `radio`, etc.

