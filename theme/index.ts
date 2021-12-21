import type { Theme } from 'vitepress'
import Default from './layout/Default.vue'
import NotFound from './layout/404.vue'
import './styles'
import 'windi-base.css'
import 'windi-components.css'
import 'windi-utilities.css'

const theme: Theme = {
  Layout: Default,
  NotFound,
  async enhanceApp({ app, router, siteData }) {
    const isDark = usePreferredDark()
    app.provide('theme', useStorage('theme', { type: isDark.value ? 'theme-dark' : 'theme-light' }))
  },
}
export default theme
