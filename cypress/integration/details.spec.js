describe('\'View Details\' button', () => {
  beforeEach('set up tests', () => {
    cy.generateTaco()
  })

  it('should render the TacoDetails page when clicked', () => {
    cy.get('.taco-generator a').click()
      .url().should('eq', 'http://localhost:3000/details/LBBFM')
  })
})

describe('TacoDetails on render', () => {
  beforeEach('set up tests', () => {
    cy.generateTaco()
    cy.get('.taco-generator a').click()
  })

  it('should display an image of a taco', () => {
    cy.fixture('../fixtures/taco-image.json')
      .then(image => {
        cy.get('.taco-image > img').should('be.visible')
          .should('have.attr', 'src', image.urls.regular)
          .should('have.attr', 'alt', 'Baked Tilapia taco')
      })
  })

  it('should continue to display a taco\'s image upon page reload', () => {
    cy.reload()

    cy.fixture('../fixtures/taco-image.json')
      .then(image => {
        cy.get('.taco-image > img').should('be.visible')
          .should('have.attr', 'src', image.urls.regular)
          .should('have.attr', 'alt', 'Baked Tilapia taco')
      })
  })

  it('should render display text for a taco', () => {
    cy.get('.details-text').should('be.visible')
      .find('.primary-toppings').contains('Baked Tilapia with Lettuce')
      .next().contains('ganished with Black Olives topped with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortilla')
  })

  it('should continue to display a taco\'s display text upon page reload', () => {
    cy.reload() 

    cy.get('.details-text').should('be.visible')
      .find('.primary-toppings').contains('Baked Tilapia with Lettuce')
      .next().contains('ganished with Black Olives topped with Mahi Mahi Rub and wrapped in a delicious Fresh Corn Tortilla')
  })

  it('should display each of a taco\'s toppings', () => {
    cy.get('.recipe-list').should('be.visible')
      .find('h1').contains('Recipes')
      .parent().find('li').should('have.length', 5)
    
    cy.get('.recipe-list').find('li')
      .eq(0).contains('Baked Tilapia')
      .parent().next().contains('Lettuce')
      .parent().next().contains('Black Olives')
      .parent().next().contains('Mahi Mahi Rub')
      .parent().next().contains('Fresh Corn Tortilla')
  })

  it('should continue to display a taco\'s toppings upon page reload', () => {
    cy.reload()

    cy.get('.recipe-list').should('be.visible')
      .find('h1').contains('Recipes')
      .parent().find('li').should('have.length', 5)
  })

  it('should allow a user to view a topping\'s recipe by clicking it', () => {
    cy.get('.recipe-list').should('be.visible')
      .find('li > a').eq(0).click()
      .url().should('eq', 'https://raw.githubusercontent.com/sinker/tacofancy/master/base_layers/baked_tilapia.md')
  })
})

describe('Back button', () => {
  beforeEach('set up tests', () => {
    cy.generateTaco()
    cy.get('.taco-generator a').click()
  })

  it('should navigate back to the TacoGeneration page when clicked', () => {
    cy.get('footer button').should('be.visible').click()
      .url().should('eq', 'http://localhost:3000/')  
  })
})
