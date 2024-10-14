import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: true,
    minify: true,
    outDir: resolve(__dirname, '../dist'),
    lib: {
      entry: resolve(__dirname, '../src/init.ts'),
    },
    rollupOptions: {
      output: [
        {
          name: 'LmcCookieConsentManagerInit',
          format: 'iife',
          entryFileNames: '[name].js',
        },
      ],
    },
  },
});
