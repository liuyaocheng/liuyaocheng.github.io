import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  extract: {
    include: ['**/*.{md,vue}', './.vitepress/theme/**/*.{md,vue}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
  attributify: true,
  shortcuts: {},
  theme: {
    // we want to extend the current colors instead of replacing them
    extend: {
      // like `bg-base` and `bg-primary`
      backgroundColor: {
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        muted: withOpacity('--color-text-muted'),
      },
      // like `text-base` and `text-primary`
      textColor: {
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
      },
    },
  },

})
function withOpacity(variableName: string) {
  return ({ opacityValue }: {opacityValue: string}) => {
    if (opacityValue)
      return `rgba(var(${variableName}), ${opacityValue})`
    return `rgb(var(${variableName}))`
  }
}
