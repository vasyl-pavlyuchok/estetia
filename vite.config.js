import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Usa '/estetia/' solo en producción (GitHub), de lo contrario usa la raíz '/'
  base: process.env.NODE_ENV === 'production' ? '/estetia/' : '/',
})