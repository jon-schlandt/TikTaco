describe('\'View Details\' button', () => {
  beforeEach('set up tests', () => {
    cy.generateTaco()
  })

  it('should render the TacoDetails page when clicked', () => {
    cy.get('.taco-generator > a').click()
      .url().should('eq', 'http://localhost:3000/details')
  })
})

describe('TacoDetails on render', () => {
  beforeEach('set up tests', () => {
    cy.generateTaco()
    cy.get('.taco-generator > a').click()
  })

  it('should display an image of a taco', () => {
    cy.fixture('../fixtures/taco-image.json')
      .then(image => {
        cy.get('.taco-image > img').should('be.visible')
          .should('have.attr', 'src', image.urls.regular)
          .should('have.attr', 'alt', 'Baked Tilapia taco')
      })
  })

  it('should render display text for a taco', () => {
    cy.get('.display-text').should('be.visible')
      .contains('Baked Tilapia with Black Olives, ganished with Lettuce (Traditional; US) topped off with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortillas')
  })
})
