// vite.config.js
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: { 
        icon: true 
      }
    })
  ]
})