describe('Favorites button', () => {
  beforeEach('set up tests', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should render the Favorites view when clicked', () => {
    cy.get('.view-favorites').should('be.visible').click()
      .url().should('eq', 'http://localhost:3000/favorites')
  })

  afterEach('clear session storage', () => {
    window.sessionStorage.clear()
  })
})

describe('Favorites on render', () => {
  it('should display an informative message if no tacos have been favorited', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.view-favorites').click()

    cy.get('.favorites').should('be.visible')
      .find('.no-favorites-msg')
      .contains('No favorites added yet.')
  })

  it('should display a taco if it has been favorited', () => {
    cy.generateAndFavoriteTaco()

    cy.get('.display-text').should('be.visible')
      .contains('Baked Tilapia with Black Olives, ganished with Lettuce (Traditional; US) topped off with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortillas')
  })

  afterEach('clear session storage', () => {
    window.sessionStorage.clear()
  })
})
