import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['react', 'react-dom'],
  },
  server: {
    // Cloudways staging/production hostnames when Vite dev middleware is active
    allowedHosts: ['.cloudwaysstagingapps.com', '.cloudwaysapps.com'],
  },
});
