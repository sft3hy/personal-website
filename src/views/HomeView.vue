<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
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
        <link rel="preload" as="image" href="/sam-townsend/images/home_picture/Climbing.jpeg" />
        <img src="/sam-townsend/images/home_picture/Climbing.jpeg" alt="Climbing" width="300rem" height="400rem">
        <div class="caption-text" data-nosnippet>
          Pictured: me at the summit of Seneca Rocks in West Virginia<br>
          (Page seemed a little empty with just the text up top)
        </div>
      </div>
    </div>
  </main>
</template>

<script>


</script>

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
  font-size: 10px;
}
</style>
