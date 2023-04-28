// type definitions for Cypress object "cy"
///<reference types="Cypress" />

import Login from "../../support/pageobject/login";
import Main from "../../support/pageobject/main";


// type definitions for custom commands like "createDefaultTodos"
describe('login', function() {
    it('validating login page', function() {
      const main= new Main();
      const login= new Login();

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
      main.sign_up()
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login().click().wait(2000)
 
      //login
      login.google_login()
      login.facebook_login()
      login.email_box()
      login.password_box()
      login.eye_icon()
      login.forgot_password()
      login.login_button()
      login.sign_up()
      login.intercom_icon()
    })
  })
  