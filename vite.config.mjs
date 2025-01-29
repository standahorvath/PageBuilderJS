import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stringPlugin from "vite-plugin-string";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  css: {
    postcss: "./postcss.config.js",
  },
  plugins: [
    vue(),
    ...(mode === "production"
      ? [
          stringPlugin({
            include: "**/*.css",
          }),
        ]
      : []),
],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: "index.js",
      name: "BlockBuilder",
      formats: ["umd", "es", "cjs"],
      fileName: "block-builder",
    },
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
}
})
