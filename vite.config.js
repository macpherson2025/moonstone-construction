import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Industry standard compilation pathing rules for modern React frameworks
export default defineConfig({
  plugins: [react()],
  base: '/', // <-- ADD THIS LINE to enforce absolute root pathways on Cloudflare
  server: {
    port: 5173,
    open: true, // Automatically pops open your default web browser on server boot
  },
  resolve: {
    alias: {
      '@': '/src', // Allows clean absolute reference shortcuts inside deep components
    },
  },
});
