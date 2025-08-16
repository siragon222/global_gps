import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://siragon222.github.io/global_gps/',
  plugins: [react()],
})
