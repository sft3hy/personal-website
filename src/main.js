import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { removeTags, createTag } from '@/utils/common';
import { createHead } from '@vueuse/head';



const app = createApp(App);
const head = createHead();

router.beforeEach((to, from, next) => {
    removeTags();

    const ogTitle = to.meta.title || 'Default Description';
    createTag('meta', 'property', 'og:title', ogTitle);

    const ogDescription = to.meta.ogDescription || 'Default Description';
    createTag('meta', 'property', 'og:description', ogDescription);

    const siteName = to.meta.title || 'Default Title';
    createTag('meta', 'property', 'og:site_name', siteName);

    const ogUrl = to.meta.ogUrl || 'Default Title';
    createTag('meta', 'property', 'og:url', ogUrl);

    const description = to.meta.description || 'Default Description';
    createTag('meta', 'name', 'description', description);
    document.title = to.meta.title || 'Default Title';

    const canon = document.createElement('link');
    canon.setAttribute('rel', 'canonical');
    canon.setAttribute('href', to.meta.canonical);
    document.head.insertBefore(canon, document.head.firstChild);

    next();
});

app.use(head);
app.use(router);
app.mount('#app');
