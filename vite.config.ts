import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = !repositoryName || repositoryName.endsWith('.github.io');

export default defineConfig({
  base: isUserSite ? '/' : `/${repositoryName}/`,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
