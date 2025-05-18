# Toolbar

The toolbar in PageBuilderJS allows you to define actions and tools that enhance the user experience inside the editor. You can provide custom buttons and tabs to interact with the page content, modules.

## 🧰 Toolbar Structure

Toolbar configuration is a simple object composed of **tabs** and **tools**.


### Toolbar Type

```ts
export type Toolbar = {
  tabs: {
    id: string;
    title: string;
    icon?: string;
    tools: string[];
  }[];
};
```

### Toolbar Tab Attributes

* **`id: string`** — Unique identifier for the tab. Used internally.
* **`title: string`** — Label displayed in the toolbar UI.
* **`icon?: string`** — Optional icon for the tab. Can be a predefined icon from list or a URL to an image.
* **`tools: string[]`** — Array of tool IDs (these must match IDs from defined `Modules`).

## 🧪 Example: Toolbar with Module Tools

Here's a complete example of a toolbar definition using tools related to the modules from the [Modules](/modules) section:

```ts
{
  tabs: [
    {
      id: 'general',
      title: 'General',
      icon: 'CheckIcon',
      tools: ['button', 'title', 'list']
    },
    {
      id: 'layout',
      title: 'Layout',
      icon: 'CheckIcon',
      tools: ['space', 'column']
    },
  ]
}
```

---

## 🧠 Tips

* Use consistent `id` values for tools and tabs
* Icons can be a icon from list or a URL to an image
* Tools are dynamically passed the selected instance

