<script setup>
import ContactInfo from '../components/ContactIcons.vue'
</script>

<template>
  <main>
    <ContactInfo />
  </main>
</template>

<script>
export default {
  methods: {
    addMetaTags() {
      const existingTitle = document.querySelectorAll('title');
      existingTitle.forEach(tag => tag.remove());
      document.title = 'Sam Townsend - Contact';

      const existingMetaTags = document.querySelectorAll('meta[name="description"]', 'meta[property="og:title"]');
      existingMetaTags.forEach(tag => tag.remove());
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = "Contact information with how to get in touch with Sam Townsend. Links to his GitHub, Email address, LinkedIn, and Instagram.";
      document.head.appendChild(metaDescription);

      const metaOgTitle = document.createElement('meta');
      metaOgTitle.setAttribute('property', 'og:title');
      metaOgTitle.content = 'Sam Townsend - Contact';
      document.head.appendChild(metaOgTitle);
    },
  },
  mounted() {
    this.addMetaTags();
  },
}

</script>