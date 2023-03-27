import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import {VitePWA} from "vite-plugin-pwa";
export default defineConfig({
  plugins: [react(),svgr(),VitePWA({
    manifest: {
      id: '/',
      icons: [
        {
          src: 'logo.jpeg',
          sizes: '144x144',
          type: 'image/png'
        }
      ]
    },
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ts,tsx}'],
      skipWaiting: true,
      clientsClaim: true,
      navigateFallback: './index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('http(s)?://\\S+'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'client-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  })],
  server:{
    host:true,
    port:3000,
  }
})
