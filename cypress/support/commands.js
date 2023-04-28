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

import 'cypress-file-upload';
Cypress.Commands.add('login',function()  
{
    cy.session([Cypress.env('username'),Cypress.env('password')],function()
    {
        cy.visit('/login');
        cy.get('[name="email"]').type(Cypress.env('username'))
        cy.get('[name="password"]').type(Cypress.env('password'))
        cy.get('[data-cy="login-submit-button"]').click()
        cy.wait(3000)
    })
    
     
})
