<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div>
    <button @click="toggleMenu" class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav v-if="isOpen" class="menu">
      <ul>
        <RouterLink to="/home" @click.native="toggleMenu">Home</RouterLink>
        <RouterLink to="/about" @click.native="toggleMenu">About</RouterLink>
        <RouterLink to="/contact" @click.native="toggleMenu">Contact</RouterLink>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style>
.hamburger {
  position: fixed;
  /* Ensures the hamburger stays at the top right */
  top: 30px;
  /* Adjust as needed */
  right: 30px;
  /* Adjust as needed */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background: black;
}

.menu {
  position: fixed;
  right: 0;
  background: white;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  /* Ensures the menu items are in a column */
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid rgb(116, 213, 134);
  border-radius: 0.2rem;
  font-size: 20px;
}

.menu li {
  padding: 10px;
}

.menu a {
  text-decoration: none;
  color: black;
}


nav {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* Ensures the links are in a column */
}

nav a.router-link-exact-active {
  color: rgb(110, 179, 122);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  /* Makes each link take up the full width */
  padding: 0.5rem 1rem;
  /* Adjust padding as needed */
  /* Ensures the links are full width */
  text-align: center;
  /* Centers the text within the links */
  border: 1px solid rgb(116, 213, 134);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>