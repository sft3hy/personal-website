<script setup>
import { RouterLink } from 'vue-router';

import Climbing from '../assets/images/home_picture/Climbing.jpeg';

</script>

<template>
  <main>
    <link rel="preload" href="/sam-townsend/src/assets/images/home_picture/Climbing.jpeg" as="image">
    <div data-nosnippet>
      <h1 style="display: none;">Sam Townsend</h1>
      <h1 class="howdy-header">Howdy!</h1>
    </div>
    <div data-nosnippet>
      <p class="home-text">Glad you could make it. Welcome to my website that I built with <a href="https://vuejs.org"
          target="_blank" rel="noopener">Vue
          JS</a>. Feel free
        to explore the <RouterLink to="/about">About</RouterLink>
        page to learn about me and reach out via the <RouterLink to="/contact">Contact
        </RouterLink>
        page!</p>
      <br>
      <div class="home-photo">
        <img :src=Climbing alt="Climbing" width="300rem" height="400rem">
        <div class="caption-text" data-nosnippet>
          Summit of <a href="https://en.wikipedia.org/wiki/Seneca_Rocks" target="_blank" rel="noopener">Seneca
            Rocks</a>in West Virginia<br>
          (It seemed a little empty on this page)
        </div>
      </div>
    </div>
  </main>
</template>



<style>
.howdy-header {
  max-width: 40vw;
}

.home-photo {
  text-align: center;
  overflow-x: hidden;

}

.home-text {
  font-size: 20px;
}

.caption-text {
  font-size: 1rem;
}
</style>
