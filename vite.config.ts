import { defineConfig, loadEnv } from 'vite'
import sharedConfig from './vite.config.shared';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), ['']);

  return {
    ...sharedConfig,
    build: {
      outDir: 'dist',
      assetsDir: '.',
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: "[name][extname]",
          chunkFileNames: "[name].js",
          entryFileNames: "[name].js"
        },
      }
    },
    define: {
      appConfig: {
        API_URL: env.API_URL,
        API_ID: env.API_ID,
      },
    },
  }
})
