import { resolve } from 'node:path'

import EslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Checker({ typescript: true }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        'm-icons': FileSystemIconLoader(`${resolve(__dirname, 'src/assets/icons')}/`, svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    }),
    pages({
      extendRoute(route) {
        route.entry = route?.element?.slice?.(1)
        return route
      },
      importMode: 'async',
      routeStyle: 'remix',
    }),
    UnoCSS(),
    AutoImport({
      imports: ['react'],
      dts: './src/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
        }),
      ],
    }),
    EslintPlugin(),
  ],
  build: {
    rollupOptions: {
      onLog(level, log, handler) {
        // ignore rollup warning about 'use client'
        if (log.message.includes('Module level directives cause errors when bundled'))
          return

        // ignore sourcemap warning about 'Can't resolve original location of error.'
        if (log.cause && (log.cause as any).message === `Can't resolve original location of error.`) {
          return
        }

        handler(level, log)
      },
    },
  },
})
