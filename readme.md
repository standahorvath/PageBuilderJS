# PageBuilderJS

PageBuilderJS is a web block builder built in Vue.js. It leverages modern tools like Vite, Tailwind CSS, and Vitest to deliver a seamless and developer-friendly experience for building dynamic and customizable web pages.

## Features

- Built with **Vue 3** for modern reactive web development.
- Includes **Tailwind CSS** with support for forms and typography plugins.
- Development powered by **Vite** for fast builds and hot module replacement.
- Unit testing using **Vitest** and **happy-dom**.
- Pre-configured ESLint and Prettier for code linting and formatting.

## Getting Started

### Prerequisites

- **Node.js** version 18 or higher.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/standahorvath/PageBuilderJS.git
   cd PageBuilderJS
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Scripts

- **Development server:**

  ```bash
  npm run dev
  ```

  Starts the development server with hot module replacement.

- **Build for production:**

  ```bash
  npm run build
  ```

  Creates an optimized production build.

- **Preview production build:**

  ```bash
  npm run preview
  ```

  Serves the production build locally on port 3000.

- **Run unit tests:**

  ```bash
  npm run test:unit
  ```

  Executes unit tests using Vitest.

- **Lint and fix files:**

  ```bash
  npm run lint
  ```

  Lints JavaScript and Vue files, automatically fixing issues when possible.

## Folder Structure

```plaintext
PageBuilderJS/
├── src/              # Application source code
├── public/           # Static assets
├── tests/            # Unit test files
├── vite.config.js    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── ...              # Other project files
```

## Dependencies

### Core

- [vue](https://vuejs.org) - Reactive framework for building user interfaces.
- [@heroicons/vue](https://github.com/tailwindlabs/heroicons) - Vue components for Heroicons.
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - Tailwind plugin for better form styles.
- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) - Tailwind plugin for improved typography.

### Development

- [vite](https://vitejs.dev) - Build tool for fast and optimized development.
- [vitest](https://vitest.dev) - Unit testing framework.
- [eslint](https://eslint.org) - Linter for JavaScript and Vue.
- [prettier](https://prettier.io) - Code formatter.
- [tailwindcss](https://tailwindcss.com) - Utility-first CSS framework.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes and submit a pull request.

## Issues

If you encounter any problems or have feature requests, please report them on the [issue tracker](https://github.com/standahorvath/PageBuilderJS/issues).

## License

This project is licensed under the ISC License.

## Links

- [Repository](https://github.com/standahorvath/PageBuilderJS)
- [Issues](https://github.com/standahorvath/PageBuilderJS/issues)

