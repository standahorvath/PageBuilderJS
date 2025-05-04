import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stringPlugin from 'vite-plugin-string'

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
      ...(mode === 'production'
        ? [
            stringPlugin({
              include: '**/*.css',
            }),
          ]
        : []),
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
