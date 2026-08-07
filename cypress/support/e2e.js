import 'cypress-axe'

beforeEach(() => {
  cy.intercept('https://static.cloudflareinsights.com/**', { statusCode: 204 })
  cy.on('window:before:load', (window) => {
    cy.stub(window.console, 'error').callsFake((...args) => {
      throw new Error(`Unexpected console error: ${args.join(' ')}`)
    })
  })
})

Cypress.Commands.add('checkSeriousAccessibility', () => {
  cy.injectAxe()
  cy.checkA11y(
    null,
    { includedImpacts: ['critical', 'serious'] },
    (violations) => {
      if (violations.length > 0) {
        const details = violations.flatMap((violation) =>
          violation.nodes.map(
            (node) => `${violation.id}: ${node.target.join(', ')} — ${node.failureSummary}`,
          ),
        )
        throw new Error(`Accessibility violations:\n${details.join('\n')}`)
      }
    },
    true,
  )
})
