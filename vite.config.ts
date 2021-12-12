import { UserConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";
import Components, { NaiveUiResolver } from "vite-plugin-components";
import AutoImport from "unplugin-auto-import/vite";
import path from "path";
const config: UserConfig = {
  server: {
    port: 9527,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@theme": path.resolve(__dirname, "./.vitepress/theme"),
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi", "@vueuse/shared", "@vueuse/core", "gsap"],
  },
  plugins: [
    Components({
      customComponentResolvers: [NaiveUiResolver()],
      globalComponentsDeclaration: "./typings/components.d.ts",
      dirs: ["./components"],
      extensions: ["vue"],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue", "@vueuse/core"],
      dts: "typings/auto-imports.d.ts",
    }),
    WindiCSS({
      preflight: false,
    }),
  ],
};
export default config;
