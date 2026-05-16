import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Only use base for production builds
  base: process.env.NODE_ENV === 'production' ? '/Yusuf-portfolio/' : '/',
})