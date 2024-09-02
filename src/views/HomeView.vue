<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1 class="howdy-header">Howdy!</h1>
    <p class="home-text">Glad you could make it. Welcome to my website that I built with <a href="https://vuejs.org"
        target="_blank" rel="noopener">Vue
        JS</a>. Feel free
      to explore the <RouterLink to="/about">About</RouterLink>
      page to learn about me and reach out via the <RouterLink to="/contact">Contact
      </RouterLink>
      page!</p>
    <br>
    <div class="home-photo">
      <img :src="climbingImage" alt="Climbing" width="300rem" height="400rem">
      <div class="caption-text">
        Pictured: me at the summit of Seneca Rocks in West Virginia<br>
        (Page seemed a little empty with just the text up top)
      </div>
    </div>

  </main>
</template>

<script>
import climbingImage from '@/assets/home_picture/Climbing.jpg';

export default {
  methods: {
    addMetaTags() {
      const existingTitle = document.querySelectorAll('title');
      existingTitle.forEach(tag => tag.remove());
      document.title = 'Sam Townsend - Home';

      const existingMetaTags = document.querySelectorAll('meta[name="description"]', 'meta[property="og:title"]');
      existingMetaTags.forEach(tag => tag.remove());
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = "Landing page for Sam Townsend's website. Links to About and Contact info.";
      document.head.appendChild(metaDescription);

      const metaOgTitle = document.createElement('meta');
      metaOgTitle.setAttribute('property', 'og:title');
      metaOgTitle.content = 'Sam Townsend - Home';
      document.head.appendChild(metaOgTitle);
    },
  },
  mounted() {
    this.addMetaTags();
  },
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
  font-size: 10px;
}
</style>
