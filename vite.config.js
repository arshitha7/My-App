import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // You can add global variables or mixins to be included in every file
        additionalData: `@import "./src/styles/variables.scss";`
      },
    },
  },
});
