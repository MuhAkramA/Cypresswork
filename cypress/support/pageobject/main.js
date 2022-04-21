class Main {
    investing(){
        return cy.get('.menuchild').eq(0).should('have.text','Investing');}
    pro_tools(){
        return cy.get('.menuchild').eq(1).should('have.text','Pro Tools');}
    academy(){
        return cy.get('.menuchild').eq(2).should('have.text','Academy');}
    about_us(){
        return cy.get('.menuchild').eq(3).should('have.text','About Us');}
    blog(){
        return cy.get('.menuchild').eq(4).should('have.text','Blog');}
    help(){
        return cy.get('.menuchild').eq(5).should('have.text','Help');}
    logo_stockbit(){
        return cy.get('.logo-big') }
    logo_idx(){
        return cy.get('img[alt="idx"]') }
    logo_ojk(){
        return cy.get('img[alt="ojk"]') }
    login(){
        return cy.get('.button-light > .login-ldn').contains('Log In')}
    sign_up(){
        return cy.get('.register-lnd').contains('Sign Up')}
    mulai_berinvestasi(){
        return cy.get('.home-btn').should('have.text','Mulai Berinvestasi')}
    appstore(){
        return cy.get('.home-badges').eq(0).find('img[src="https://stockbit.com/assets/template/4b70f6fae447.png"]')}
    playstore(){
        return cy.get('.home-badges').find('img[src="https://stockbit.com/assets/template/f06b908907d5.png"]')}  
    }
    export default Main