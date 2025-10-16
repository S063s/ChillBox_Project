import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // If your API calls look like: fetch('/api/deezer/genre')
      '/api/deezer': {
        target: 'https://api.deezer.com', 
        changeOrigin: true, // Needed for virtual hosting
        rewrite: (path) => path.replace(/^\/api\/deezer/, ''), // Remove the '/api/deezer' prefix when forwarding
        secure: false, // For HTTPS targets
      },
    },
  },
})
