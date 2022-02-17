context('Button Clear all', () => {
  beforeEach(function () {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
  });

  it('When clicked all inputs must be empty', () => {
    cy.get('[id=initialContribution]').type('teste');
    cy.get('[id=monthlyContribution]').type('teste');
    cy.get('[id=term]').type('teste');
    cy.get('[id=revenue]').type('teste');

    cy.contains('Limpar campos').click();

    cy.get('[id=initialContribution]').should('have.value', '');
    cy.get('[id=monthlyContribution]').should('have.value', '');
    cy.get('[id=term]').should('have.value', '');
    cy.get('[id=revenue]').should('have.value', '');
  });
});
