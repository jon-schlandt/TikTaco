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
        cy.get('.taco-image > img')
          .should('have.attr', 'src', image.urls.regular)
          .should('have.attr', 'alt', 'Baked Tilapia taco')
      })
  })
})
