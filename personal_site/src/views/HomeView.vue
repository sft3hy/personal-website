<script setup>
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1 class="howdy-header">Howdy!</h1>
    <p class="home-text">Glad you could make it. Welcome to my website that I built with <a href=“https://vuejs.org”>Vue
        JS</a>. Feel free
      to explore the About page to learn about me and reach out via the Contact page!</p>
    <div class="home-photo">
      <img :src="climbingImage" alt="Climbing" width="300rem" height="400rem">
      <div class="caption-text">
        This is me at the summit of Seneca Rocks in West Virginia<br>
        (The page seemed a little empty with just the text up top)
      </div>
    </div>

  </main>
</template>

<script>
import climbingImage from '@/assets/home_picture/Climbing.jpg';

export default {
  data() {
    return {
      climbingImage
    };
  }
};
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
  font-size: 15px;
}
</style>
