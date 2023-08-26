import { defineConfig, loadEnv } from 'vite'
import sharedConfig from './vite.config.shared';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), ['']);

  return {
    ...sharedConfig,
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'WeatherWidget',
        fileName: (format) => `weather-widget.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    define: {
      appConfig: {
        API_URL: env.API_URL,
        API_ID: env.API_ID,
      }
    },
  }
})
