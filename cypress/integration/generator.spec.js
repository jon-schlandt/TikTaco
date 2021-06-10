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
      .find('p').contains('Select the button below to generate a random taco.')
  })

  it('should display a button for generating a random taco', () => {
    cy.get('.taco-generator')
      .find('.primary-btn').should('be.visible')
      .contains('Generate Taco')
  })
})

describe('Generate Taco button', () => {
  beforeEach('set up tests', () => {
    cy.setTacoIntercept()
    cy.visit('http://localhost:3000')
    cy.get('.primary-btn').click()
  })

  it('should generate a random taco that displays in the taco display when clicked', () => {
    cy.get('.taco-display')
      .find('p').contains('Baked Tilapia with Black Olives, ganished with Lettuce (Traditional; US) topped off with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortillas')
  })

  it('should update its inner text to \'View Details\' when clicked', () => {
    cy.get('.primary-btn').should('be.visible')
      .contains('View Details')
  })

  it('should render a secondary \'Generate another?\' button directly below it when clicked', () => {
    cy.get('.primary-btn').next('button')
      .should('be.visible')
      .should('have.class', 'secondary-btn')
      .contains('Generate another?')
  })
})
