import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Contact from '../views/ContactView.vue';

const metaOgTitleHome = 'Sam Townsend - Home';
const metaDescriptionHome = "Sam Townsend's home page";

const metaOgTitleAbout = 'Sam Townsend - About';
const metaDescriptionAbout = "Sam is a software engineer working part time for Arcfield and getting his Master's in Data Science at UC Irvine. Pictures on this page include travelling and surfing.";
const metaOgDescriptionAbout = "Sam Townsend's biographical information";

const metaOgTitleContact = 'Sam Townsend - Contact';
const metaDescriptionContact = "Get in touch with Sam Townsend - GitHub, Email address, LinkedIn, and Instagram.";
const metaOgDescriptionContact = "Sam Townsend's contact information";

const ogUrlHome = 'https://sft3hy.github.io/sam-townsend'
const ogUrlAbout = 'https://sft3hy.github.io/sam-townsend/about'
const ogUrlContact = 'https://sft3hy.github.io/sam-townsend/contact'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: metaOgTitleHome,
      description: metaDescriptionHome,
      ogDescription: metaDescriptionHome,
      ogUrl: ogUrlHome,
      canonical: ogUrlHome,
    }

  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: metaOgTitleAbout,
      description: metaDescriptionAbout,
      ogDescription: metaOgDescriptionAbout,
      ogUrl: ogUrlAbout,
      canonical: ogUrlAbout,
    }

  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: metaOgTitleContact,
      description: metaDescriptionContact,
      ogDescription: metaOgDescriptionContact,
      ogUrl: ogUrlContact,
      canonical: ogUrlContact,
    }

  }
]

const router = createRouter({
  history: createWebHistory('/sam-townsend/'),
  routes

});

export default router;