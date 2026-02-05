import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Forzamos la base del repositorio para que GitHub siempre encuentre los archivos
  base: '/estetia/', 
})