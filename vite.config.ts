import path from 'node:path';
import process from 'node:process';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      tailwindcss(),
      svgr(),
    ],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['wouter'],
            store: ['zustand', 'zustand/shallow'],
            utils: ['tailwind-merge', 'clsx'],
          },
        },
      },
    },
    // В production: статически заменяет VITE_ENABLE_MSW через loadEnv (читает .env.production),
    // чтобы Rollup убирал мёртвый код с dynamic import msw/browser если MSW не нужен.
    // В dev: не трогаем — Vite сам читает .env.development через нативный import.meta.env.
    ...(mode !== 'development' && {
      define: {
        'import.meta.env.VITE_ENABLE_MSW': JSON.stringify(env.VITE_ENABLE_MSW ?? 'false'),
      },
    }),
    server: {
      port: 5173,
      open: true,
    },
  };
});
