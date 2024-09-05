import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { removeTags, createTag } from '@/utils/common';


const app = createApp(App);

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


    next();
});

app.use(router).mount('#app');
