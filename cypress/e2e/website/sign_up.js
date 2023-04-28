// type definitions for Cypress object "cy"
///<reference types="Cypress" />

import Login from "../../support/pageobject/login";
import Main from "../../support/pageobject/main";
import Sign_up from "../../support/pageobject/sign_up";


// type definitions for custom commands like "createDefaultTodos"
describe('login', function() {
    it.only('reguler register', function() {
      const main= new Main();
      const sign= new Sign_up();

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
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login()
      main.sign_up().click().wait(2000)

      //sign_up
      sign.google_register()
      sign.facebook_register()
      sign.login_button()
      sign.terms_condition()
      sign.intercom_icon()
      sign.email_register().click()
      sign.your_name().type('lord_maguiare')
      sign.your_email().type('lord@maguiare.com')
      sign.username().type('lordmaguiare')
      sign.password().type('1231231')
      sign.confirm_password().type('1231231')
      sign.register_button().click()
      sign.number_box().type('39389731873')
      sign.register_button().click()
      sign.verification_button().click()
      sign.coded_1().type()
      sign.coded_2().type()
      sign.coded_3().type()
      sign.coded_4().type()
      sign.verification_button().click()
    })

    it('reguler register without name', function() {
      const main= new Main();
      const sign= new Sign_up();

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
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login()
      main.sign_up().click().wait(2000)

      //sign_up
      sign.google_register()
      sign.facebook_register()
      sign.login_button()
      sign.terms_condition()
      sign.intercom_icon()
      sign.email_register().click()
      sign.your_name()
      sign.your_email().type('lord@maguiare.com')
      sign.username().type('lordmaguiare')
      sign.password().type('lordmaguiare123')
      sign.confirm_password().type('lordmaguiare123')
      sign.register_button().click()
      cy.get('input:invalid').should('have.length', 1)
      cy.get('#input-1').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
    })

    it('reguler register without email', function() {
      const main= new Main();
      const sign= new Sign_up();

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
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login()
      main.sign_up().click().wait(2000)

      //sign_up
      sign.google_register()
      sign.facebook_register()
      sign.login_button()
      sign.terms_condition()
      sign.intercom_icon()
      sign.email_register().click()
      sign.your_name().type('lord maguiare')
      sign.your_email()
      sign.username().type('lordmaguiare')
      sign.password().type('lordmaguiare123')
      sign.confirm_password().type('lordmaguiare123')
      sign.register_button().click()
      cy.get('#input-2').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

    it('reguler register without username', function() {
      const main= new Main();
      const sign= new Sign_up();

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
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login()
      main.sign_up().click().wait(2000)

      //sign_up
      sign.google_register()
      sign.facebook_register()
      sign.login_button()
      sign.terms_condition()
      sign.intercom_icon()
      sign.email_register().click()
      sign.your_name().type('lord maguiare')
      sign.your_email().type('lord@maguiare.com')
      sign.username()
      sign.password().type('lordmaguiare123')
      sign.confirm_password().type('lordmaguiare123')
      sign.register_button().click()
      cy.get('#input-3').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

    it('reguler register without password', function() {
      const main= new Main();
      const sign= new Sign_up();

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
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login()
      main.sign_up().click().wait(2000)

      //sign_up
      sign.google_register()
      sign.facebook_register()
      sign.login_button()
      sign.terms_condition()
      sign.intercom_icon()
      sign.email_register().click()
      sign.your_name().type('lord maguiare')
      sign.your_email().type('lord@maguiare.com')
      sign.username().type('lordmaguiare')
      sign.password()
      sign.confirm_password().type('lordmaguiare123')
      sign.register_button().click()
      cy.get('#input-4').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

    it('reguler register without confirm password', function() {
      const main= new Main();
      const sign= new Sign_up();

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
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login()
      main.sign_up().click().wait(2000)

      //sign_up
      sign.google_register()
      sign.facebook_register()
      sign.login_button()
      sign.terms_condition()
      sign.intercom_icon()
      sign.email_register().click()
      sign.your_name().type('lord maguiare')
      sign.your_email().type('lord@maguiare.com')
      sign.username().type('lordmaguiare')
      sign.password().type('lordmaguiare123')
      sign.confirm_password()
      sign.register_button().click()
      cy.get('#input-5').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

    it('reguler register password do not match', function() {
      const main= new Main();
      const sign= new Sign_up();

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
      main.mulai_berinvestasi()
      main.appstore()
      main.playstore()
      main.logo_ojk()
      main.logo_idx()
      main.login()
      main.sign_up().click().wait(2000)

      //sign_up
      sign.google_register()
      sign.facebook_register()
      sign.login_button()
      sign.terms_condition()
      sign.intercom_icon()
      sign.email_register().click()
      sign.your_name().type('lord_maguiare')
      sign.your_email().type('lord@maguiare.com')
      sign.username().type('lordmaguiare')
      sign.password().type('12312311')
      sign.confirm_password().type('1231231111')
      sign.register_button().click()
      sign.error_password()
    })
  })
  