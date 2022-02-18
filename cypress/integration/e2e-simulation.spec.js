context('Simulation', () => {
  beforeEach(function () {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
  });

  it('Try to get results', () => {
    cy.contains('Líquido').click();
    cy.contains('PÓS').click();

    cy.get('input[name=initialContribution]')
      .type('R$1.000,00')
      .should('have.value', 'R$1.000,00');
    cy.get('input[name=term]').type('30').should('have.value', '30');
    cy.get('input[name=monthlyContribution]')
      .type('R$200,00')
      .should('have.value', 'R$200,00');
    cy.get('input[name=revenue]').type('5%').should('have.value', '5%');

    cy.get('button[type=submit]').click();

    cy.contains('Resultado da simulação');
  });
});
