
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/Safedial-month2/'

function offlinePrecachePlugin() {
  return {
    name: 'safedial-offline-precache',
    generateBundle(_outputOptions, bundle) {
      const assets = Object.keys(bundle)
        .filter((fileName) => /\.(js|css|png|jpe?g|svg|webp|woff2?)$/i.test(fileName))
        .map((fileName) => `${base}${fileName}`)

      this.emitFile({
        type: 'asset',
        fileName: 'precache-manifest.json',
        source: JSON.stringify(assets),
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), offlinePrecachePlugin()],
  base,
})
