# PageBuilderJS

[![npm version](https://img.shields.io/npm/v/pagebuilderjs?color=%2300C853\&label=pagebuilderjs%20on%20npm\&logo=npm)](https://www.npmjs.com/package/pagebuilderjs)

PageBuilderJS is a fully self-contained **Web Component page builder** designed to be easily integrated into any web platform. It allows developers to provide an intuitive block-based page editing experience to their users with minimal setup.

**🔥 LIVE DEMO → [https://standahorvath.github.io/PageBuilderJS/demo-page.html](https://standahorvath.github.io/PageBuilderJS/demo-page.html)** 

**📖 DOCUMENTATION → [https://standahorvath.github.io/PageBuilderJS/](https://standahorvath.github.io/PageBuilderJS/)**

---

![Demo](https://standahorvath.github.io/PageBuilderJS/builder-preview.gif)

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

```js
  const builder = document.createElement('block-builder')
  const content = [/* ... */]
  const modules = [/* ... */]
  const toolbar = {/* ... */}

  // Assign data
  builder.modules = modules
  builder.toolbar = toolbar
  builder.content = content

  // Listen to any changes in content structure
  builder.addEventListener('onUpdate', (event) => {
    console.log('Blocks content changed:', event.detail)
  })

  document.body.appendChild(builder)
```

You can use it in any modern frontend or backend system (Laravel, Symfony, Node.js, plain HTML etc.).

If you want to get started quickly, go to the **[Live Demo](https://standahorvath.github.io/PageBuilderJS/demo-page.html)** and check the **[Getting started page](https://standahorvath.github.io/PageBuilderJS/getting-started.html)**.

----

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

### Toolbar Type
The toolbar is a simple object composed of **tabs** and **tools**.

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

---

## 📝 Developer Notes

Although built with **Vue 3 + Vite + Pinia + Tailwind CSS**, PageBuilderJS is shipped as a fully standalone **Web Component** → you don't need Vue or any framework to use it!

This makes it perfect for integrating into any system without conflicts.


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
