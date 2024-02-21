import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Thay 'build' bằng thư mục bạn muốn xuất build
  },
  base: "/Ocean-Jenkinson",
})
