import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
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
  }
})
