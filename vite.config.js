import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // for Netlify
  server: {
    allowedHosts: [
      'devserver-main--reliable-gnome-c05aac.netlify.app',
      '.netlify.app'
    ]
  }
})
