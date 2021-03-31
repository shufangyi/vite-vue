import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // options are passed on to @vue/babel-plugin-jsx
    vueJsx({}),
    pages({
      syncIndex: false,
      extensions: ['vue', 'ts'],
    }),
  ],
})
