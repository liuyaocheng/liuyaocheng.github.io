
<template>
  <n-config-provider :locale="zhCN" :theme="nTheme" :theme-overrides="themeOverrides" abstract>
    <div :class="pageClasses">
      <NavBar @toggle="toggleSidebar" />

      <SideBar v-if="showSidebar" :open="openSideBar" />
      <div class="sidebar-mask" @click="toggleSidebar(false)" />

      <Home v-if="enableHome">
        <template #hero>
          <slot name="home-hero" />
        </template>
        <template #features>
          <slot name="home-features" />
        </template>
        <template #footer>
          <slot name="home-footer" />
        </template>
      </Home>
      <Tags v-else-if="layout === 'tags'" />
      <Docs v-else-if="layout === 'docs'" />
      <Page v-else />
    </div>
    <Debug />
  </n-config-provider>
</template>
<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { darkTheme, zhCN, NConfigProvider } from 'naive-ui'
import type { Ref } from 'vue'
import { isSideBarEmpty, getSideBarConfig } from '../support/sideBar'

import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue'
import Page from '../components/Page.vue'
import Tags from '../components/Tags.vue'
import Docs from '../components/Docs.vue'
import Home from '../components/Home.vue'

import naiveUItheme from '../support/naive-ui.json'
const themeOverrides = { ...naiveUItheme }
const themeData = inject<Ref<{type: string; count: number}>>('theme')
const nTheme = computed(() => {
  return themeData.value.type === 'theme-dark' ? darkTheme : { }
})

const route = useRoute()
const { site, page, theme, frontmatter } = useData()
const enableHome = computed(() => !!frontmatter.value.home)
const layout = computed(() => frontmatter.value.layout)
const openSideBar = ref(false)
const showSidebar = computed(() => {
  if (frontmatter.value.home || frontmatter.value.sidebar === false)
    return false

  return !isSideBarEmpty(
    getSideBarConfig(theme.value.sidebar, route.data.relativePath),
  )
})

const toggleSidebar = (to?: boolean) => {
  openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value
}

const hideSidebar = toggleSidebar.bind(null, false)
watch(route, hideSidebar)

const pageClasses = computed(() => {
  return [
    {
      'sidebar-open': openSideBar.value,
      'no-sidebar': !showSidebar.value,
    },
  ]
})
</script>
<style>
#ads-co #ads-container {
  margin: 0 auto;
}

@media (min-width: 420px) {
  #ads-container {
    position: relative;
    right: 0;
    float: right;
    margin: -8px -8px 24px 24px;
    width: 146px;
  }
}

@media (max-width: 420px) {
  #ads-container {
    /* Avoid layout shift */
    height: 105px;
    margin: 1.75rem 0;
  }
}

@media (min-width: 1400px) {
  #ads-container {
    position: fixed;
    right: 8px;
    bottom: 8px;
  }
}
</style>
