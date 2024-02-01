import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteProxy from 'vite-plugin-proxy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteProxy({
      '/api': {
        target: 'http://localhost:3000', // Your server's address
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
