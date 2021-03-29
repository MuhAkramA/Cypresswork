// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('Quality Assurance on Simple Factorial Web App', function() {
  it('Factorial', function() {
    cy.visit("http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/");
    cy.get('#number').type('a') ///string type data
    cy.get('#getFactorial').click()
    cy.get('#resultDiv').should('be.visible','Please enter an integer')
  })
  })
