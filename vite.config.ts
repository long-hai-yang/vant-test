import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
const path = require('path');

export default ({ mode }) => {
  const ENV = loadEnv(mode, process.cwd()).VITE_NODE_ENV;
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      }),
    ],
    resolve:{
      alias:{
        '@/components': path.resolve(__dirname, './src/components'),
        '@/utils': path.resolve(__dirname, './src/utils'),
        '@/assets': path.resolve(__dirname, './src/assets'),
        '@/api': path.resolve(__dirname, './src/api'),
        '@/router': path.resolve(__dirname, './src/router'),
        '@/pages': path.resolve(__dirname, './src/pages'),
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      proxy: {
        "/gatwayUrl": {
          target: "http://192.168.10.236:8092",
          ws: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/gatwayUrl/, "")
        },
      },
    },
    build: {
    }
  })
}