---
date: 2021-12-12
title: test
layout: se
tags:
  - 监控
  - 性能优化
describe: 网站监控是到底是监控的啥？我们为什么要监控？
---

# test

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## tres

[[toc]]

<List/>  
{{count}}

<n-button @click="handelAdd">+</n-button>

<script setup>
  const count = ref(0)
  const handelAdd = () => {
    count.value++
  }
</script>
