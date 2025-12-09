import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix: Define __dirname for ESM environment
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for Shopify CDN
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        // New entry point for vanilla JS components
        main: path.resolve(__dirname, 'src/js/main.js'),
      },
      output: {
        // Fixed names (no hashing) for easier Shopify integration
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-chunk.js',
        assetFileNames: 'assets/[name].[ext]',
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 5173,
    open: false
  }
});