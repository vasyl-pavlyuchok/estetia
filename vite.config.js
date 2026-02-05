import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite usa import.meta.env.PROD para saber si está en GitHub o en local
  base: typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? '/estetia/' : '/estetia/',
})