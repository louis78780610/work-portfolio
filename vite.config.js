import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // index.html のみをエントリーポイント
    rollupOptions: {
      input: './index.html'
    }
  }
})
