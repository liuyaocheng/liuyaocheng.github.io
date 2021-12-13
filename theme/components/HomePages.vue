<template>
  <div>
    <template v-for="(p, index) in pages" :key="index">
      <a :href="p.regularPath">
        <div class="m-10">{{ p.title }}</div>
      </a>
    </template>
  </div>
</template>

<script lang='ts' setup>
import { useRoute, useData } from 'vitepress'
import { useNavLink } from '../composables/navLink'
const { site, page, theme, frontmatter } = useData()
const pages = theme.value.pages

</script>
