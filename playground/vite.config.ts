import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import InertiaPageLoader from 'inertia-page-loader/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Vue(),
    InertiaPageLoader({
      namespaces: ({ npm, composer }) => [
        { 'my-package-1': 'test_node_modules/my-plugin1/src/Pages' },
        npm('my-plugin2', 'test_node_modules'),
        composer('ycs77/my-php-package', 'test_vendor'),
      ],
    }),
  ],
})
