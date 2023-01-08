// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react()],
  test: {
    environment: 'jsdom',
    // coverage: {
    //   include:['src/somePath']
    // }
  },
  resolve: {
    alias: [
      { find: 'components', replacement: '/src/components' },
      { find: 'hooks', replacement: '/src/hooks' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'pagesContent', replacement: '/src/pagesContent' },
      { find: 'routes', replacement: '/src/routes.ts' },
      { find: 'rtl', replacement: '/src/rtl/index.tsx' },
      { find: 'types', replacement: '/src/types' },
      { find: 'utils', replacement: '/src/utils' },
    ],
  },
})
