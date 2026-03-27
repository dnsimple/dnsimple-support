import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import includeCss from 'vite-plugin-css-injected-by-js';

export default defineConfig(({ command }) => ({
  plugins: [vue(), includeCss()],
  resolve: {
    alias: {
      vue: command === 'build'
        ? 'vue/dist/vue.runtime.esm-browser.prod.js'
        : 'vue/dist/vue.runtime.esm-browser.js'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(__dirname, '../content/assets/css')]
      }
    }
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
}));
