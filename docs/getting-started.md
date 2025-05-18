# Getting Started

Welcome to PageBuilderJS! This guide will help you integrate the visual editor into your project and start building pages with custom blocks.

## 📦 Installation

Install the package via npm:

```bash
npm install pagebuilderjs
```

## 📂 Usage

Include the compiled Web Component in your project:

```html
<script src="/node_modules/pagebuilderjs/dist/block-builder.umd.js"></script>
<block-builder modules="[]" toolbar="[]" content="[]"></block-builder>
```

Or if you are using a bundler:

```js
import 'pagebuilderjs';
```

Make sure to define the custom element before using it:

```js
document.addEventListener('DOMContentLoaded', () => {
  const builder = document.querySelector('block-builder');
  // Now you can interact with the builder programmatically
});
```

## ✅ Requirements

* Node.js 18+
* Modern browser with WebComponent support (most do)

## 🔗 Links

* [Live Demo](https://standahorvath.github.io/PageBuilderJS/)
* [GitHub Repository](https://github.com/standahorvath/PageBuilderJS)
* [Issue Tracker](https://github.com/standahorvath/PageBuilderJS/issues)
