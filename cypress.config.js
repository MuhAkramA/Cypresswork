const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  projectId: '2dce8o',
  viewportWidth: 1940,
  viewportHeight: 900,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
