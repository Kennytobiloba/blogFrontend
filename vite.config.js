import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2048, // Increase the limit to 2MB
  },
})
