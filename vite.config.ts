import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ambassador: resolve(__dirname, 'ambassador/index.html')
      }
    }
  }
})
