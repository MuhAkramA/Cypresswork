class VIX {
    google_login(){
        return cy.get('.login-goog');}
    facebook_login(){
        return cy.get('.login-fb');}
    email_box(){
        return cy.get('#username');}
    password_box(){
        return cy.get('#password');}
    eye_icon(){
        return cy.get('.eye-icon');}
    forgot_password(){
        return cy.get('.forgot-password > p > a').should('have.text',' Click here');}
    login_button(){
        return cy.get('#loginbutton');}
    sign_up(){
        return cy.get('.login-note > p > a');}
    intercom_icon(){
        return cy.get('.intercom-launcher');}
    }
    export default VIX