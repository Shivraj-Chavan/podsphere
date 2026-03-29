import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5031,
    host: true,
    proxy: {
      '/api': {
        target: 'http://69.62.84.113:5031/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  }
})
