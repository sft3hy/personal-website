import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Sitemap from 'vite-plugin-sitemap';

const rewriteSlashToIndexHtml = () => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/' || req.url === '/about' || req.url === '/contact') {
          req.url = '/index.html'
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {

  return {
    base: '/sam-townsend/',
    plugins: [
      vue(),
      rewriteSlashToIndexHtml(),
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

