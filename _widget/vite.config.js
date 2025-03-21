import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import includeCss from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [vue(), includeCss()],
  define: {
    'process.env': {}
  },
  build: {
    outDir: '../output' ,
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'Support Widget',
      fileName: (format, entryName) => `widget.js`,
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
