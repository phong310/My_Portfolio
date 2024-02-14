import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_GITHUB_ACCESS_TOKEN': JSON.stringify(env.REACT_APP_GITHUB_ACCESS_TOKEN),
      'process.env.REACT_APP_IMAGE_PATH': JSON.stringify(env.REACT_APP_IMAGE_PATH)
    },
    plugins: [react()],
  }
})