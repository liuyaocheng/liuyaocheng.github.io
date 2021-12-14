import path from 'path'
import type { UserConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
const config: UserConfig = {
  server: {
    port: 9527,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core', 'gsap'],
  },
  plugins: [
    Components({
      resolvers: [NaiveUiResolver(), IconsResolver({
        componentPrefix: '',
        // enabledCollections: ['carbon']
      })],
      dts: './typings/components.d.ts',
      // globalComponentsDeclaration: './typings/components.d.ts',
      dirs: ['./components'],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', '@vueuse/core'],
      dts: 'typings/auto-imports.d.ts',
    }),
    WindiCSS({
      preflight: false,
    }),
    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
    }),
  ],
}
export default config
