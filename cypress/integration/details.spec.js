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

  describe('Recipes list', () => {
    it('should render each of a taco\'s toppings', () => {
      cy.get('.recipe-list').should('be.visible')
        .find('li').should('have.length', 5)
      
      cy.get('.recipe-list').find('li')
        .eq(0).contains('Baked Tilapia')
        .parent().next().contains('Lettuce')
        .parent().next().contains('Black Olives')
        .parent().next().contains('Mahi Mahi Rub')
        .parent().next().contains('Fresh Corn Tortillas')
    })
  })
  
  // it('should render each topping within a \'Recipes\' list, each topping should link to its recipe', () => {
  //   cy.get('')
  // })
})
