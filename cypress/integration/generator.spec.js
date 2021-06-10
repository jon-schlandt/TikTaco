export {}

describe('TacoGenerator on first load', () => {
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

  it('should only display a button for generating a random taco', () => {
    cy.get('.taco-generator')
      .find('button').should('be.visible')
      .contains('Generate Taco')
  })
})

describe('Generate Taco button', () => {
  beforeEach('set up tests', () => {
    cy.addTacoIntercept()
    cy.visit('http://localhost:3000')
  })

  it('should generate a random taco that displays in the taco display', () => {
    cy.get('button').click()

    cy.get('.taco-display')
  })
})
