import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change this to the appropriate output directory
    chunkSizeWarningLimit: 1000, // Optional, adjust the chunk size warning limit
  },
})
