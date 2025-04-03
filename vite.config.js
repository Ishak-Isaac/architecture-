import { defineConfig } from 'vite';

export default defineConfig({
  root: "./", // Set "website" as the working directory
  build: { // Output everything directly in "dist/"
    rollupOptions: {
      input: "website/website.html", // Ensure Vite treats website.html as the entry point
    },
  },
});