import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/", // Asegura que se sirva correctamente en Vercel
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Usa @ como alias para src
    }
  }
})
