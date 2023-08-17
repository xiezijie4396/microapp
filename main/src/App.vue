
<template>
 <div id="app">
    这里是主体哦
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/main/vue2">vue2</router-link> |
      <router-link to="/main/vue3">vue3</router-link> |
      <router-link to="/main/vue2hash">vue2hash</router-link> |
      <router-link to="/main/vue3hash">vue3hash</router-link>
      <!-- <router-link to="/vue3/">vue3</router-link> |
      <router-link to="/react/">react</router-link> |
      <router-link to="/default/">default</router-link> |
      <router-link to="/vue2hash/">vue2hash</router-link> |
      <router-link to="/vue3hash/">vue3hash</router-link> -->
    </nav>
    <router-view v-slot="{ Component }">
      <keep-alive :max="100">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>

</style>
