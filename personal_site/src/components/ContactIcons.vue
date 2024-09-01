<script setup>
import WelcomeItem from './WelcomeItem.vue'
import Instagram from './icons/Instagram.vue'
import Gmail from './icons/Gmail.vue'
import LinkedIn from './icons/LinkedIn.vue'
import GitHub from './icons/GitHub.vue'
</script>

<template>

  <div class="contact">
    <div class="contact-title">
      <h1>Get in touch</h1>
    </div>
    <div class="contact-links-container">
      <WelcomeItem>
        <template #icon>
          <Gmail />
        </template>
        <template #heading><a href="mailto:smaueltown@gmail.com" target="_blank" rel="noopener">Email</a>
          <p>smaueltown@gmail.com</p>
        </template>
      </WelcomeItem>
      <WelcomeItem>
        <template #icon>
          <LinkedIn />
        </template>
        <template #heading><a href="https://linkedin.com/in/samuel-townsend1" target="_blank"
            rel="noopener">LinkedIn</a>
        </template>
      </WelcomeItem>
      <WelcomeItem>
        <template #icon>
          <GitHub />
        </template>
        <template #heading><a href="https://github.com/sft3hy" target="_blank" rel="noopener">Github</a>
        </template>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <Instagram />
        </template>
        <template #heading><a href="https://www.instagram.com/sam_townsend_" target="_blank"
            rel="noopener">Instagram</a>
        </template>
      </WelcomeItem>
    </div>
  </div>
</template>
<style>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
}

.contact-title {
  text-decoration: underline;
}
</style>