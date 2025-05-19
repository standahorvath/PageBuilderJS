# Getting Started

Welcome to PageBuilderJS! This guide will help you integrate the visual editor into your project and start building pages with custom blocks.

## 📦 Installation

Install the package via npm:

```bash
npm install pagebuilderjs
```

## 📂 Usage

Include the compiled Web Component in your project:

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

Or if you are using a bundler:

```js
import 'pagebuilderjs';
```

## ✅ Requirements

* Node.js 18+
* Modern browser with WebComponent support (most do)

## 🔗 Links

* [Live Demo](https://standahorvath.github.io/PageBuilderJS/)
* [GitHub Repository](https://github.com/standahorvath/PageBuilderJS)
* [Issue Tracker](https://github.com/standahorvath/PageBuilderJS/issues)
