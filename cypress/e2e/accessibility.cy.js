const pages = ['/', '/es/', '/fr/']

describe('automated accessibility smoke tests', () => {
  pages.forEach((routePath) => {
    it(`has no serious or critical axe violations on ${routePath}`, () => {
      cy.visit(routePath)
      cy.get('main').should('exist')
      cy.checkSeriousAccessibility()
      cy.get('main h1').should('have.length', 1)
      cy.get('nav').should('exist')
    })
  })

  it('checks open mobile navigation and both themes', () => {
    cy.viewport(390, 844)
    cy.visit('/')
    cy.get('.mobile-menu-button').click()
    cy.checkSeriousAccessibility()
    cy.get('.mobile-menu-button').should('have.attr', 'aria-expanded', 'true')
    cy.get('.mobile-menu-button').click()
    cy.get('button[aria-pressed]:visible').first().click()
    cy.checkSeriousAccessibility()
  })

  pages.forEach((routePath) => {
    it(`checks one localized article from ${routePath}`, () => {
      cy.visit(routePath)
      cy.get('#endpoint article a').first().click()
      cy.get('article h1').should('exist')
      cy.checkSeriousAccessibility()
    })
  })
})
