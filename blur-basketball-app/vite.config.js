import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blur-basketball/', // For GitHub Pages URL
  build: {
    outDir: 'dist',
  }
})
