describe('Pokemon List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays pokemon cards on the home page', () => {
    cy.get('.list-container').should('be.visible');
    cy.get('.list-item').should('have.length.at.least', 1);
  });

  it('each pokemon card has a name and background image', () => {
    cy.get('.list-item').first().within(() => {
      cy.get('.list-item-name').should('be.visible');
      cy.get('.list-item-name').should('not.be.empty');
    });
    cy.get('.list-item').first()
      .should('have.css', 'background-image')
      .and('include', 'url');
  });

  it('displays the first pokemon as bulbasaur', () => {
    cy.get('.list-item').first().within(() => {
      cy.get('.list-item-name').should('have.text', 'bulbasaur');
    });
  });

  it('clicking a pokemon card navigates to its detail page', () => {
    cy.get('.list-item').first().click();
    cy.url().should('include', '/pokemon/');
  });
});
