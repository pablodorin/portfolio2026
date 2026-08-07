import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:4173',
    setupNodeEvents(on) {
      on('before:browser:launch', (_browser, launchOptions) => launchOptions)
    },
  },
  retries: { runMode: 1, openMode: 0 },
  video: Boolean(process.env.CI),
  screenshotOnRunFailure: true,
})
