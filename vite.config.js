import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Sitemap from 'vite-plugin-sitemap';


// https://vitejs.dev/config/
export default defineConfig(({ command }) => {

  return {
    build: {
      rollupOptions: {
        external: [
          '/sam-townsend/images/home_picture/Climbing.jpeg',
          '/sam-townsend/images/about_pictures/Climbing.jpeg',
          'sam-townsend/images/about_pictures/backpackingCamino.jpeg',
          'sam-townsend/images/about_pictures/ChicagoBean.jpeg',
          'sam-townsend/images/about_pictures/Climbing1.jpeg',
          'sam-townsend/images/about_pictures/friends.jpeg',
          'sam-townsend/images/about_pictures/SenecaBase.jpeg',
          'sam-townsend/images/about_pictures/snorkelMaui.jpeg',
          'sam-townsend/images/about_pictures/surfingMaui.jpeg',
          'sam-townsend/images/about_pictures/surfingOBX.jpeg'
        ]
      }
    },
    plugins: [
      vue(),
      Sitemap({
        hostname: 'https://sft3hy.github.io/',
        dynamicRoutes: [
          '/sam-townsend/#',
          '/sam-townsend/#/contact',
          '/sam-townsend/#/about',
        ],
      }),
    ],
    base: '/sam-townsend/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  }

});

