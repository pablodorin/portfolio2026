import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const cloudflareBeaconSource =
  'src="https://static.cloudflareinsights.com/beacon.min.js"'

function preserveCloudflareBeacon() {
  return {
    name: 'preserve-cloudflare-web-analytics',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replace(
          `<script\n      type="module"\n      ${cloudflareBeaconSource}`,
          `<script\n      vite-ignore\n      type="module"\n      ${cloudflareBeaconSource}`,
        )
      },
    },
  }
}

function endpointInputs(directory, prefix) {
  const entries = readdirSync(directory, { withFileTypes: true })

  return Object.fromEntries(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => [
        `${prefix}${entry.name.replaceAll('-', '_')}`,
        path.join(directory, entry.name, 'index.html'),
      ]),
  )
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preserveCloudflareBeacon()],
  build: {
    rolldownOptions: {
      input: {
        en: `${projectRoot}index.html`,
        es: `${projectRoot}es/index.html`,
        fr: `${projectRoot}fr/index.html`,
        ...endpointInputs(`${projectRoot}endpoint`, 'endpoint_en_'),
        ...endpointInputs(`${projectRoot}es/endpoint`, 'endpoint_es_'),
        ...endpointInputs(`${projectRoot}fr/endpoint`, 'endpoint_fr_'),
      },
    },
  },
})
