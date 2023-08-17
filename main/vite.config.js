import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/main/',
  plugins: [vue({
    template: {
      compilerOptions: {
        // 注册自定义组件micro-app 防止控制台警告
        isCustomElement: tag => /^micro-app/.test(tag)
      }
    }
  })],
  server: {
    port: 8000
  },
  build: {
    outDir: path.join(__dirname, '../server/main')
  }
})
