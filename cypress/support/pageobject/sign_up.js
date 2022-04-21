class Sign_up {
    google_register(){
        return cy.get('.register-goog');}
    facebook_register(){
        return cy.get('.register-fb');}
    email_register(){
        return cy.get('.register-email').should('have.text','Register with Email');}
    login_button(){
        return cy.get('.login-note > div > :nth-child(1) > a');}
    terms_condition(){
        return cy.get('div > :nth-child(2) > a');}
    intercom_icon(){
        return cy.get('.intercom-launcher');}
    register_button(){
        return cy.get('.loginlogin');}
    your_name(){
        return cy.get('#input-1');}
    your_email(){
        return cy.get('#input-2');}
    username(){
        return cy.get('#input-3')}
    password(){
        return cy.get('#input-4')}
    confirm_password(){
        return cy.get('#input-5');}
    error_password(){
        return cy.get('.errorfield > .errormsg').contains('Password does not match')}
    number_box(){
        return cy.get('.form-control')}
    verification_message(){
        return cy.get('#loginbackx').contains('Kode verifikasi telah terkirim ke nomor anda');}
    verification_button(){
        return cy.get('.loginlogin');}
    resend_code(){
        return cy.get('.info2 > div > a');}
    coded_1(){
        return cy.get('#input-1');}
    coded_2(){
        return cy.get('#input-2');}
    coded_3(){
        return cy.get('#input-3')}
    coded_4(){
        return cy.get('#input-4')}
    changenumber(){
        return cy.get('[href="javascript:void(0)"]')}
    }
    export default Sign_up