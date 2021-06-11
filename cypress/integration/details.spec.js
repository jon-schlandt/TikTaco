describe('\'View Details\' button', () => {
  beforeEach('set up tests', () => {
    cy.generateTaco()
  })

  it('should render the TacoDetails page when clicked', () => {
    cy.get('.taco-generator > a').contains('View Details').click()
      .url().should('eq', 'http://localhost:3000/details')
  })
})

describe('TacoDetails on render', () => {
  

  // it('should display a sel')
})
