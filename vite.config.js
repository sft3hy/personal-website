import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Sitemap from 'vite-plugin-sitemap';


// https://vitejs.dev/config/
export default defineConfig(({ command }) => {

  return {
    base: '/sam-townsend/',
    plugins: [
      vue(),
      Sitemap({
        hostname: 'https://sft3hy.github.io/',
        dynamicRoutes: [
          '/sam-townsend',
          '/sam-townsend/contact',
          '/sam-townsend/about',
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  }

});

