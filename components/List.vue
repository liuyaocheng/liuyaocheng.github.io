<template>
  <div class="bg-gray-200" />
  <n-button type="primary" @click="handelAdd">
    Add
  </n-button>
  <n-input />
</template>
<script lang="ts" setup>
const count = ref(0)
const handelAdd = () => {
  console.log('123')
  count.value++
}
</script>
