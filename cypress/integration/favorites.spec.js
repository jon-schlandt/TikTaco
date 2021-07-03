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

describe('Favorites view on render', () => {
  it('should display an informative message if no tacos have been favorited', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.view-favorites').click()

    cy.get('.favorites').should('be.visible')
      .find('.no-favorites-msg')
      .contains('No tacos here. Find a sharable taco!')
  })

  it('should display a taco if it has been favorited', () => {
    cy.generateAndFavoriteTaco()

    cy.get('.details-text').should('be.visible')
    .find('.primary-toppings').contains('Baked Tilapia with Lettuce')
    .next().contains('ganished with Black Olives topped with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortilla')
  })

  it('should continue to display a taco if it has been favorited and the page is reloaded', () => {
    cy.generateAndFavoriteTaco()
    cy.reload()

    cy.get('.details-text').should('be.visible')
    .find('.primary-toppings').contains('Baked Tilapia with Lettuce')
    .next().contains('ganished with Black Olives topped with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortilla')
  })

  describe('Favorited taco within Favorites view', () => {
    beforeEach('set up tests', () => {
      cy.generateAndFavoriteTaco()
    })
    
    it('should render the favorited taco\'s details view when clicked', () => {
      cy.get('.favorite-display-btns > a').click()
        .url().should('eq', 'http://localhost:3000/details/LBBFM')

      cy.get('.taco-image').should('be.visible')
        .find('img')
        .should('have.attr', 'src', 'https://images.unsplash.com/photo-1598902289654-6c1ba478eaa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzg2NDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjM0MzUwNjc&ixlib=rb-1.2.1&q=80&w=1080')

      cy.get('.details-text').should('be.visible')
      .find('.primary-toppings').contains('Baked Tilapia with Lettuce')
      .next().contains('ganished with Black Olives topped with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortilla')

      cy.get('.recipe-list').should('be.visible')
        .find('a').should('have.length', 5)
    })
  })

  afterEach('clear session storage', () => {
    window.sessionStorage.clear()
  })
})
