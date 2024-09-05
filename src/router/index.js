import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const metaOgTitleHome = 'Sam Townsend - Home';
const metaDescriptionHome = "Sam Townsend's home page";

const metaOgTitleAbout = 'Sam Townsend - About';
const metaDescriptionAbout = "Sam is a software engineer working part time for Arcfield and getting his Master's in Data Science at UC Irvine. Pictures on this page include travelling and surfing.";
const metaOgDescriptionAbout = "Sam Townsend's biographical information";

const metaOgTitleContact = 'Sam Townsend - Contact';
const metaDescriptionContact = "Get in touch with Sam Townsend - GitHub, Email address, LinkedIn, and Instagram.";
const metaOgDescriptionContact = "Sam Townsend's contact information";

const ogUrlHome = 'https://sft3hy.github.io/sam-townsend/'
const ogUrlAbout = 'https://sft3hy.github.io/sam-townsend/about'
const ogUrlContact = 'https://sft3hy.github.io/sam-townsend/contact'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: metaOgTitleHome,
        description: metaDescriptionHome,
        ogDescription: metaDescriptionHome,
        ogUrl: ogUrlHome,
      }

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: metaOgTitleAbout,
        description: metaDescriptionAbout,
        ogDescription: metaOgDescriptionAbout,
        ogUrl: ogUrlAbout,
      }

    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: metaOgTitleContact,
        description: metaDescriptionContact,
        ogDescription: metaOgDescriptionContact,
        ogUrl: ogUrlContact,
      }

    }
  ]
});

export default router
