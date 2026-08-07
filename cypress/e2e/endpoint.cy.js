describe('Endpoint', () => {
  it('opens an article, follows circular navigation, and preserves its identity across locales', () => {
    cy.visit('/#endpoint')
    cy.get('#endpoint article a').first().click()
    cy.location('pathname').should('match', /^\/endpoint\//u)
    cy.get('h1').invoke('text').should('not.be.empty')
    cy.get('time').should('have.attr', 'datetime')
    cy.get('.article-pagination a').eq(1).click()
    cy.get('.article-pagination a').eq(0).click()
    cy.get('header nav a[hreflang="es"]').invoke('attr', 'href').then((spanishPath) => {
      cy.get('header nav a[hreflang="es"]').click()
      cy.location('pathname').should('eq', spanishPath)
      cy.get('header nav a[hreflang="fr"]').invoke('attr', 'href').then((frenchPath) => {
        cy.get('header nav a[hreflang="fr"]').click()
        cy.location('pathname').should('eq', frenchPath)
      })
    })
  })

  it('keeps principal internal links resolvable', () => {
    cy.visit('/')
    cy.get('a[href^="/"]').then(($links) => {
      const paths = [...new Set([...$links].map((link) => link.getAttribute('href')).filter(Boolean))]
      paths.slice(0, 12).forEach((routePath) => cy.request(routePath).its('status').should('eq', 200))
    })
  })
})
