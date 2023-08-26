import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import sharedConfig from './vite.config.shared';

export default mergeConfig(
  {
    ...sharedConfig,
    define: {
      appConfig: {
        API_URL: 'http://localhost:3000',
        API_ID: 'API_ID',
      }
    }
  },
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
