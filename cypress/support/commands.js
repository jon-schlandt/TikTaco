export {}

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setTacoIntercepts', () => {
  cy.fixture('../fixtures/taco-data.json')
    .then(data => cy.intercept('http://taco-randomizer.herokuapp.com/random/', data))

  cy.fixture('../fixtures/taco-image.json')
    .then(image => cy.intercept('https://api.unsplash.com/photos/random?query=taco', image))
})

Cypress.Commands.add('setErrorIntercept', (statusCode) => {
  cy.intercept('http://taco-randomizer.herokuapp.com/random/', {statusCode})
})

Cypress.Commands.add('generateTaco', () => {
  cy.setTacoIntercepts()
  cy.visit('http://localhost:3000')

  cy.get('.primary-btn').click()
})

Cypress.Commands.add('generateAndFavoriteTaco', () => {
  cy.generateTaco()

  cy.get('.taco-generator > a').click()
  cy.get('.favorite-btn').click()
  cy.get('.view-favorites').click()
})
