<template>
  <div class="docs w-5/6 m-auto">
    <div v-for="(year, index) in data" :key="index + String(year)" class="years">
      <div class="year">
        {{ year[0].date.split("-")[0] }}
      </div>
      <a
        v-for="(article, el) in year"
        v-show="!article.home"
        :key="el"
        :href="base + article.regularPath || ''"
        class="article"
      >
        <div class="title">{{ article.title || "" }}</div>
        <div class="date">{{ article.date.slice(5) || "" }}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from 'vue'
import { useData } from 'vitepress'
import { withBase, useYearSort } from '../utils'
import { Build } from '../build'
const { site, theme } = useData()
// const siteData = site;
const data = computed(() =>
  useYearSort(theme.value.pages),
)
const base = Build()
</script>

<style scoped>
.docs {
  padding-top: var(--header-height);
}
.header {
  color: #353535;
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  text-align: center;
}
.year {
  padding: 15px 0;
  font-size: 1.3rem;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
  color: var(--text-color);
}
.article {
  padding: 2px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  color: var(--accent-color);
  font-size: 1.1rem;
}
.date {
  color: #ccc;
  font-size: 1rem;
}

@media screen and (max-width: 700px) {
  .header {
    font-size: 1.5rem;
  }
  .article {
    padding: 2px;
  }
  .date,
  .title {
    font-size: 0.9rem;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
