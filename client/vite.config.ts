import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text'],
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['./src/main.tsx', 'node_modules/', 'dist/', '.idea/', '.git/', '.cache/'],
    }
  }
} as UserConfig)
