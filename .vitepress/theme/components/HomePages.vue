<template>
  <div>
    <template v-for="(page, index) in pages">
      <a :href="page.regularPath">
        <div class="m-10">{{ page.title }}</div>
      </a>
    </template>
  </div>
</template>

<script lang='ts' setup>
import { useRoute, useData } from "vitepress";
import { useNavLink } from '../composables/navLink'
const { site, page, theme, frontmatter } = useData();
const pages = theme.value.pages


</script>

<style scoped>
</style>
