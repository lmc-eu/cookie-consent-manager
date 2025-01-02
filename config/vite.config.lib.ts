import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  build: {
    emptyOutDir: false,
    sourcemap: true,
    minify: true,
    outDir: resolve(__dirname, '../dist'),
    lib: {
      entry: resolve(__dirname, '../src/AlmaCareerCookieConsentManager.ts'),
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
        },
        {
          name: 'AlmaCareerCookieConsentManager',
          format: 'iife',
          entryFileNames: '[name].js',
        },
      ],
    },
  },
});
