<template>
  <div class="bg-gray-200"></div>
  <n-button type="primary" @click="handelAdd">Add</n-button>
  <div class="bg-indigo-400 p-3 w-full">{{ count }}</div>
</template>
<script lang="ts" setup>
const count = ref(0);
const handelAdd = () => {
  console.log("123");
  count.value++;
};
</script>
