/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
     cy.visit('http://localhost:8080/public/')
  })
  it('displays two todo items by default', () => {
    cy.contains('Signup for the latest tutorials')
    cy.get('#name').type('Test Name')
    cy.get('#email').type('Test Email@gmail.com')
    cy.get('#age').type('34')
    cy.get('button').should('exist').click()

  })
})
