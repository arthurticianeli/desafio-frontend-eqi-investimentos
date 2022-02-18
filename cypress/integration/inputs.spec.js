context('Inputs', () => {
  beforeEach(function () {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
  });

  it('Get error when is empty', () => {
    cy.contains('Simular').click();

    cy.get('[id=initialContribution]').contains('Preencha o campo');
    cy.get('[id=monthlyContribution]').contains('Preencha o campo');
    cy.get('[id=term]').contains('Preencha o campo');
    cy.get('[id=revenue]').contains('Preencha o campo');
  });

  it('Get error when filled wrong', () => {
    cy.get('[id=initialContribution]').type('Mil reais');
    cy.get('[id=monthlyContribution]').type('Duzentos reais');
    cy.get('[id=term]').type('Trinta');
    cy.get('[id=revenue]').type('Vinte por cento');

    cy.contains('Simular').click();

    cy.get('[id=initialContribution]').contains(
      'Digite o valor em Real (ex. R$1.000,00)'
    );
    cy.get('[id=monthlyContribution]').contains(
      'Digite o valor em Real (ex. R$1.000,00)'
    );
    cy.get('[id=term]').contains('Apenas números');
    cy.get('[id=revenue]').contains('Apenas porcentagem (ex. 10%)');
  });
});
