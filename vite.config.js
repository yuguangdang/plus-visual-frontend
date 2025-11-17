import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    assetsDir: '',  // put assets directly under dist/
    rollupOptions: {
      output: {
        entryFileNames: `index-[hash].js`,
        chunkFileNames: `index-[hash].js`,
        assetFileNames: `index-[hash].[ext]`,
      },
    },
  },
  esbuild: {
    legalComments: 'none', // Optional: remove vite legal comments
  },
})
