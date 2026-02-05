import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/estetia/', // <-- CAMBIO AQUI: Aseguramos la base para GitHub Pages
})
