import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For custom domain www.blurbasketball.com
  build: {
    outDir: 'dist',
  }
})
