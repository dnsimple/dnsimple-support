import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// No CSS-injection plugin: the widget owns a shadow root now, and initialize.js
// imports the styles with `?inline` and adopts them into it, so nothing reaches
// the host page's <head>. See _widget/src/initialize.js.
export default defineConfig(({ command }) => ({
  plugins: [vue()],
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
