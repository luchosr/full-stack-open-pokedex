describe('Pokemon Detail Page', () => {
  beforeEach(() => {
    cy.visit('/pokemon/bulbasaur')
  })

  it('displays the pokemon name', () => {
    cy.get('.pokemon-name').should('be.visible')
    cy.get('.pokemon-name').should('have.text', 'bulbasaur')
  })

  it('displays the pokemon image', () => {
    cy.get('.pokemon-image')
      .should('be.visible')
      .should('have.css', 'background-image')
      .and('include', 'url')
  })

  it('displays pokemon stats', () => {
    cy.get('[data-testid="stats"]').should('be.visible')
    cy.get('.pokemon-stats-name').should('have.length.at.least', 1)
    cy.get('.pokemon-stats-value').should('have.length.at.least', 1)
  })

  it('displays pokemon abilities', () => {
    cy.get('.pokemon-abilities').should('be.visible')
  })

  it('has navigation links', () => {
    cy.get('.links').should('be.visible')
    cy.get('.links').contains('Home').should('be.visible')
  })

  it('Home link navigates back to the list', () => {
    cy.get('.links').contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.get('.list-container').should('be.visible')
  })

  it('Previous link navigates to previous pokemon when available', () => {
    cy.visit('/pokemon/ivysaur')
    cy.get('.links').contains('Previous').click()
    cy.url().should('include', '/pokemon/')
  })

  it('applies correct type class for styling', () => {
    cy.get('.pokemon-page')
      .should('have.attr', 'class')
      .and('match', /pokemon-type-/)
  })
})
