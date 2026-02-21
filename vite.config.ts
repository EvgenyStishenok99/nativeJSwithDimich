
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/



export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,      // позволяет использовать test/expect без импорта
    environment: 'jsdom' // эмулируем браузер
  }
})