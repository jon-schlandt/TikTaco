export {}

describe('TacoGenerator', () => {
  beforeEach('set up tests', () => {
    cy.visit('http://localhost:3000')
  })

  it('should display a greeting to the user', () => {
    cy.get('.taco-generator')
      .find('.greeting').should('be.visible')
      .contains('Good toppings!')
  })

  it('should display an informative message in the taco display', () => {
    cy.get('.taco-generator')
      .find('.taco-display').should('be.visible')
      .contains('Select the button below to generate a random taco.')
  })

  it('should have a button for generating a random taco', () => {
    cy.get('.taco-generator')
      .find('button').should('be.visible')
      .contains('Generate Taco')
  })
})