import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/estetia/', // 👈 Asegúrate de incluir las barras al principio y al final
})