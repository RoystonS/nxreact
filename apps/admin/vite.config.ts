/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/admin',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    sassDts({
      enabledMode: ['development', 'production'],
      global: {
        generate: true,
        outFile: path.resolve(__dirname, './src/style.d.ts'),
      },
    }),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles" as common;`,
        importer(...args: any[]) {
          if (args[0] !== '@/styles') {
            return;
          }

          return {
            file: `${path.resolve(__dirname, './src/assets/styles')}`,
          };
        },
      },
    },
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
