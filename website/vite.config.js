export default {
  root: "", // Ensure Vite uses the correct root directory
  build: {
    rollupOptions: {
      input: "index.html", // Make sure it points to the right entry file
    }
  }
};