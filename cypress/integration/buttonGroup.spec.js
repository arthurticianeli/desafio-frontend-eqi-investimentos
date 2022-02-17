context('Simulation', () => {
  beforeEach(function () {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
  });

  it('Change color and icon on buttongroup', () => {
    cy.contains('Líquido').click();

    cy.get('button[value=liquido]').should(
      'have.css',
      'background-color',
      'rgb(235, 139, 84)'
    );

    cy.get('button[value=liquido]').children('svg');
  });
});
