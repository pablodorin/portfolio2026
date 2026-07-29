import { fileURLToPath } from 'node:url'
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preserveCloudflareBeacon()],
  build: {
    rolldownOptions: {
      input: {
        en: `${projectRoot}index.html`,
        es: `${projectRoot}es/index.html`,
        fr: `${projectRoot}fr/index.html`,
        endpointEnAi: `${projectRoot}endpoint/ai-augmented-engineering/index.html`,
        endpointEnBottleneck: `${projectRoot}endpoint/code-is-no-longer-the-bottleneck/index.html`,
        endpointEnMicroservices: `${projectRoot}endpoint/microservices-when-they-solve-problems/index.html`,
        endpointEsAi: `${projectRoot}es/endpoint/ingenieria-aumentada-por-ia/index.html`,
        endpointEsBottleneck: `${projectRoot}es/endpoint/el-codigo-ya-no-es-el-cuello-de-botella/index.html`,
        endpointEsMicroservices: `${projectRoot}es/endpoint/microservicios-cuando-resuelven-problemas/index.html`,
        endpointFrAi: `${projectRoot}fr/endpoint/ingenierie-augmentee-par-ia/index.html`,
        endpointFrBottleneck: `${projectRoot}fr/endpoint/le-code-n-est-plus-le-goulot/index.html`,
        endpointFrMicroservices: `${projectRoot}fr/endpoint/microservices-quand-ils-resolvent-les-problemes/index.html`,
      },
    },
  },
})
