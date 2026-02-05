import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Usamos ruta vacía para que sea relativa y funcione en Firebase Studio y GitHub
  base: '', 
})