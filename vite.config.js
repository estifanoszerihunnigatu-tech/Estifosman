import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Estifosman/' : '/',
  server: {
    port: 3001, // Changed to 3001 to avoid conflict with other projects
    host: true, // Enable network access for mobile testing
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
