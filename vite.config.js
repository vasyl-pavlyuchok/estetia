import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Al dejar la base vacía, funcionará tanto en el previo de Firebase como en el subdirectorio de GitHub
  base: './', 
})