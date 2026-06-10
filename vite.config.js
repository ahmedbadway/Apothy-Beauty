import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub Pages repo path
export default defineConfig({
  base: '/Apothy-Beauty/',
  plugins: [react(), tailwindcss()],
})
