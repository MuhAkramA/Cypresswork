// type definitions for Cypress object "cy"
///<reference types="Cypress" />

import Main from "../../support/pageobject/main";


// type definitions for custom commands like "createDefaultTodos"
describe('validating button and copywrite in stockbit main page', function() {
    it('validating button and copywrite in stockbit main page', function() {
      const main= new Main();

      //main_page
      cy.visit(Cypress.env('url'));
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false})
      main.investing()
      main.pro_tools()
      main.academy()
      main.about_us()
      main.blog()
      main.help()
      main.logo_stockbit()
      main.login()
      main.sign_up()
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
  
    })
  })
  