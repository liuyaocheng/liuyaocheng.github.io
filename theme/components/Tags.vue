<template>
  <div class="tags text-center">
    <div class="mb-3">
      <div v-for="(item,index) in tags" :key="index" class="cursor-pointer" @click="handelTage(item)">
        {{ item }}
      </div>
    </div>
    <div v-for="(item,index) in tagToPages" :key="index">
      <a :href="item.regularPath">{{ item.title }}</a>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useRoute, useData } from 'vitepress'
const tagToPages = ref([])
const { theme } = useData()
const pages = theme.value.pages
const tags = new Set(pages.map(page => page.tags).flat())
function handelTage(item: string) {
  tagToPages.value = pages.filter(page => page.tags?.includes(item))
}
</script>

<style scoped>
.tags {
  padding-top: var(--header-height);
}
</style>
