import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components  from "unplugin-vue-components/resolvers"
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({
    resolvers:
  })
  ]
})
