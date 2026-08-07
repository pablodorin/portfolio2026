describe('multilingual portfolio', () => {
  it('navigates sections and languages and persists the theme', () => {
    cy.visit('/')
    cy.title().should('include', 'Pablo Dorin')
    cy.get('main').should('exist')
    cy.get('a[href="#projects"]:visible').first().click()
    cy.location('hash').should('eq', '#projects')

    cy.get('a[aria-label*="Spanish"]:visible').first().click()
    cy.location('pathname').should('eq', '/es/')
    cy.get('html').should('have.attr', 'lang', 'es')
    cy.get('a[aria-label*="francés"]:visible, a[aria-label*="français"]:visible')
      .first()
      .click()
    cy.location('pathname').should('eq', '/fr/')

    cy.get('button[aria-pressed]:visible').first().click()
    cy.get('html').invoke('attr', 'data-theme').then((theme) => {
      cy.reload()
      cy.get('html').should('have.attr', 'data-theme', theme)
    })
  })

  it('supports the mobile menu and closes it after navigation', () => {
    cy.viewport(390, 844)
    cy.visit('/')
    cy.get('.mobile-menu-button').click().should('have.attr', 'aria-expanded', 'true')
    cy.get('#mobile-navigation a[href="#projects"]').click()
    cy.get('.mobile-menu-button').should('have.attr', 'aria-expanded', 'false').focus()
    cy.focused().should('have.class', 'mobile-menu-button')
  })

  it('moves the projects carousel only on request', () => {
    cy.visit('/#projects')
    cy.get('.projects-carousel').as('carousel')
    cy.get('@carousel').find('h3').invoke('text').then((firstTitle) => {
      cy.get('@carousel').find('button').contains('Next project').click()
      cy.get('@carousel').find('h3').should('not.have.text', firstTitle)
      cy.get('@carousel').find('button').contains('Previous project').click()
      cy.get('@carousel').find('h3').should('have.text', firstTitle)
      cy.get('@carousel').find('h3').should('have.text', firstTitle)
    })
  })
})
