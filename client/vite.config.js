import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set base to ./ for relative paths, which works better with hosting platforms
  base: './',
  server: {
    // Allow access from external devices for testing
    host: true,
    // Port for development server
    port: 3000
  },
  build: {
    // Output directory for build files
    outDir: '../dist',
    // Empty the outDir before building
    emptyOutDir: true
  }
})