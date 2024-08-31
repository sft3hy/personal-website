<script setup>
import { RouterView } from 'vue-router'
import HamburgerMenu from './components/HamburgerMenu.vue';
</script>

<template>

  <div id="app">
    <HamburgerMenu />
    <!-- Other content -->
  </div>


  <RouterView />
</template>




<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
