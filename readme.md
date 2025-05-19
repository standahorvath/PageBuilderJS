# PageBuilderJS

[![npm version](https://img.shields.io/npm/v/pagebuilderjs?color=%2300C853\&label=pagebuilderjs%20on%20npm\&logo=npm)](https://www.npmjs.com/package/pagebuilderjs)

PageBuilderJS is a fully self-contained **Web Component page builder** designed to be easily integrated into any web platform. It allows developers to provide an intuitive block-based page editing experience to their users with minimal setup.

👉👉👉 **🔥 LIVE DEMO → [https://standahorvath.github.io/PageBuilderJS/](https://standahorvath.github.io/PageBuilderJS/)** 👈👈👈

---

## ✨ Key Features

* Distributed as **npm package** for easy integration
* Works anywhere via **WebComponent** (`<block-builder>` tag)
* Drag & Drop visual block builder
* Create and manage reusable **modules (blocks)**
* Dynamic template rendering with integrated **TemplifyJS** engine
* Fully customizable toolbar actions
* Fast and lightweight (internally built with Vue 3 + Vite + Tailwind CSS)

---

## 🚀 How to Use

### 1️⃣ Install via npm

```bash
npm i pagebuilderjs
```

### 2️⃣ Add to your project

The library exposes the `block-builder` web component.

Example usage in any web application:

```html
<script src="/path/to/block-builder.umd.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
    const builder = document.querySelector("block-builder");
    // builder is ready
});
</script>

<block-builder></block-builder>
```

You can use it in any modern frontend or backend system (Laravel, Symfony, Node.js, plain HTML etc.).



---

## 🧱 Core Concepts

### ➡️ Modules (Blocks)

Example module definition:

```typescript
const buttonModule: Module = {
  id: 'button',
  title: 'Button',
  icon: '🖱️',
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
};
````

A **Module** is a configurable block the user can drag into the builder canvas.

```typescript
export type Module = {
  title: string;
  id: string;
  icon: string;
  structure: {
    tabs: ModuleTab[];
  };
  render?: string;
};
```

### ➡️ TemplifyJS (Rendering Engine)

Modules use the **TemplifyJS** mini-template engine for live previews:

```html
<button style="background-color: {{backgroundColor}}; color: {{textColor}}">{{label}}</button>
```

Features:

* `{{ variable }}` → inject dynamic values
* `{{ variable | pipe }}` → apply custom filters
* `{% foreach:array %} ... {% endforeach %}` → loops
* `{% if:condition %} ... {% endif %}` → conditionals

[See full TemplifyJS docs →]([github.com/standahorvath/TemplifyJS](https://github.com/standahorvath/TemplifyJS))

### ➡️ Toolbar System

You can extend the editor with your own toolbar buttons.

Example toolbar action:

```typescript
const myToolbarAction: ToolbarAction = {
  icon: '🗑️',
  title: 'Delete block',
  onClick: (instance) => {
    console.log('Delete block:', instance.id);
  }
};
```

### ➡️ State Management

Blocks and structure are handled by a built-in Pinia store (`ContentStore.ts`).

---

## 📝 Developer Notes

Although built with **Vue 3 + Vite + Pinia + Tailwind CSS**, PageBuilderJS is shipped as a fully standalone **Web Component** → you don't need Vue or any framework to use it!

This makes it perfect for integrating into any system without conflicts.

---

## 🛠️ Development Setup

### Requirements

* **Node.js** 18+

### Local development

```bash
git clone https://github.com/standahorvath/PageBuilderJS.git
cd PageBuilderJS
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run unit tests:

```bash
npm run test:unit
```

Lint & fix code:

```bash
npm run lint
```

---

## 📁 Folder Structure

```plaintext
PageBuilderJS/
├── src/              # Source code
├── public/           # Assets
├── tests/            # Unit tests
├── vite.config.ts    # Vite config
├── tailwind.config.ts # Tailwind config
└── ...
```

---

## 📝 Contributing

1. Fork the repo
2. Create a branch
3. Open a pull request

Follow ESLint + Prettier style.

---

## 🐛 Issues

Submit issues at:
[https://github.com/standahorvath/PageBuilderJS/issues](https://github.com/standahorvath/PageBuilderJS/issues)

---

## 📄 License

PageBuilderJS is licensed under the ISC License.

---

## 🔗 Links

* [Live Demo](https://standahorvath.github.io/PageBuilderJS/)
* [GitHub Repository](https://github.com/standahorvath/PageBuilderJS)
* [Issue Tracker](https://github.com/standahorvath/PageBuilderJS/issues)
