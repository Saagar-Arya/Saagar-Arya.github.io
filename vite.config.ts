import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split the framework and UI library out of the app chunk so they stay
        // cached across deploys — the app code changes far more often than they do.
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) {
            return 'react';
          }
          if (/node_modules\/(@chakra-ui|@emotion|@ark-ui|@zag-js|@pandacss)\//.test(id)) {
            return 'chakra';
          }
        },
      },
    },
  },
});
