
<!-- my-page.vue -->
<template>
  <div>
    <h1>子应用</h1>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
      -->
    <micro-app :name='current.appName' :url='current.url' :baseroute='current.baseroute' keep-alive></micro-app>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
const isDev = (import.meta.env.MODE === 'development')
const route = useRoute()
const origin = location.origin

const list = ref([
  {
    appName: 'vue2',
    url: isDev ? 'http://localhost:8001/child/vue2' : `${origin}/child/vue2`,
    baseroute: '/my-page/vue2'
  },
  {
    appName: 'vue3',
    url: isDev ? 'http://localhost:8002/child/vue3' : `${origin}/child/vue3`,
    baseroute: '/my-page/vue3'
  },
  {
    appName: 'vue2hash',
    url: isDev ? 'http://localhost:8003/child/vue2hash' : `${origin}/child/vue2hash`,
    baseroute: '/my-page/vue2hash'
  },
  {
    appName: 'vue3hash',
    url: isDev ? 'http://localhost:8004/child/vue3hash' : `${origin}/child/vue3hash`,
    baseroute: '/my-page/vue3hash'
  }
])

const current = ref(list.value[0])

watch(
  () => route.path,
  newPath => {
    for (let i = 0; i < list.value.length; i++) {
      const item = list.value[i]
      if (newPath === item.baseroute) {
        current.value = item
        break
      }
    }
  },
  {
    immediate: true
  }
)
</script>