import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://master-glass.glass.deu01.k8s.anteater.dub.aws.k8s.3stripes.net/cart/restore?pid_0=BB1306_600&qty_0=1',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  }
})