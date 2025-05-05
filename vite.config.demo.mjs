import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  return {
    base: './',
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    css: {
      postcss: './postcss.config.js',
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: 'demo',
      emptyOutDir: true,
    },
  }
})
