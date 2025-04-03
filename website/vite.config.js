import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: '/website/website.html'
      }
    }
  }
});