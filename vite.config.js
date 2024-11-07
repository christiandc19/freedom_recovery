// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/freedom_recovery/',  // Add this line for correct asset path
  plugins: [react()]
})
