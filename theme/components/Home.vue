<script setup lang="ts">
import HomeFooter from './HomeFooter.vue'
import HomePages from './HomePages.vue'
</script>

<template>
  <main class="home" aria-labelledby="main-title">
    <HomePages />
    <HomeFooter />
  </main>
</template>

<style scoped>
.home {
  padding-top: var(--header-height);
}

.home-content {
  max-width: 960px;
  margin: 0px auto;
  padding: 0 1.5rem;
}
</style>
