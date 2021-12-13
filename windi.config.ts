import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  extract: {
    include: ['**/*.{md,vue}', './.vitepress/theme/**/*.{md,vue}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
  attributify: true,
  shortcuts: {},
  theme: {},
})
