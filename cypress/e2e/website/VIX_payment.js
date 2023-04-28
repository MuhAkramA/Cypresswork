// type definitions for Cypress object "cy"
///<reference types="Cypress" />

import VIX from "../../support/pageobject/VIX_page";


// type definitions for custom commands like "createDefaultTodos"
describe('verified Payment Access', function() {

  // beforeEach(function(){
  //   cy.login('test','test')
  // })
    it.skip('Authenticated user checkout program (user already logged in)', function() {

      const vix= new VIX();
      const filepath = '/File/contoh.pdf';

      cy.session([Cypress.env('username'),Cypress.env('password')],function()
    {
        cy.visit('/login');
        cy.get('[name="email"]').type(Cypress.env('username'))
        cy.get('[name="password"]').type(Cypress.env('password'))
        cy.get('[data-cy="login-submit-button"]').click()
        cy.wait(3000)
    })

      //explore_page
      cy.visit('/virtual-internship-experience/explore');
      //verified logout_icon
      cy.get('img[src="/assets/IconLogout-1c9b4043.svg"]').should('be.visible')
      cy.contains('OK').click()
      cy.contains('Pilih Program').click()
      const kategori = cy.get('[class="vacancy-card-link"]')
      kategori.should('be.visible')
      kategori.first().contains('Bank Muamalat').click()
      cy.contains('Daftar sekarang').click()
      cy.contains('Nama Lengkap sesuai KTP ').should('be.visible')
      cy.get('[name="name"]').clear().type('armagedon')
      cy.contains('Nomor Whatsapp ').should('be.visible')
      cy.get('[name="phone_number"]').clear().type('089699393412')
      cy.contains('Link Profile LinkedIn').should('be.visible')
      cy.get('[name="linkedin_url"]').clear().type('https://www.linkedin.com/in/armagedon/')
      cy.contains('Unggah Resume atau CV').should('be.visible')
      cy.get('input[type="file"]').attachFile(filepath).wait(5000)
      // file uploaded
      cy.contains('https://rakamin-app.[...].pdf').should('be.visible')
      cy.contains('Darimana kamu mendapatkan informasi tentang Virtual Intership Experience? ').should('be.visible')
      const kotak = cy.get('[class="sc-irmnWS lhaYTR checkbox-icon"]')
      kotak.should('be.visible')
      kotak.first().click()
      cy.contains('Agreement ').should('be.visible')
      cy.contains('Saya memahami dan berkomitmen terhadap mekanisme penyelesaian Program Virtual Internship dan selanjutnya menyatakan akan mengerjakan setiap project dengan integritas tinggi dan sungguh-sungguh').should('be.visible')
      cy.get('[data-cy="agreement-checkbox').click()
      cy.get('[data-cy="vix-form-submit-button"]').click()
      cy.get('[data-cy="button-confirm"]').contains('Lanjutkan').click()
      const VIP = cy.contains('Dapatkan Fasilitas Magang VIP Access:')
      VIP.should('be.visible')
      VIP.click()
      cy.get('[data-cy="continue-to-payment-button"]').click()
    })

    it('Unauthenticated user checkout program', function() {

      const vix= new VIX();
      const filepath = '/File/contoh.pdf';

      //explore_page
      cy.visit('/virtual-internship-experience/explore');
      cy.get('[data-cy="login-page-button"]').first().click()
      cy.get('[name="email"]').type(Cypress.env('username1'))
      cy.get('[name="password"]').type(Cypress.env('password1'))
      cy.get('[data-cy="login-submit-button"]').click()
  
      //verified logout_icon
      cy.get('img[src="/assets/IconLogout-1c9b4043.svg"]').should('be.visible')
      cy.contains('OK').click()
      // cy.contains('Pilih Program').click()
      const kategori = cy.get('[class="vacancy-card-link"]')
      kategori.should('be.visible')
      kategori.first().contains('Bank Muamalat').click()
      cy.contains('Daftar sekarang').click()
      cy.contains('Nama Lengkap sesuai KTP ').should('be.visible')
      cy.get('[name="name"]').clear().type('armagedon')
      cy.contains('Nomor Whatsapp ').should('be.visible')
      cy.get('[name="phone_number"]').clear().type('089699393412')
      cy.contains('Link Profile LinkedIn').should('be.visible')
      cy.get('[name="linkedin_url"]').clear().type('https://www.linkedin.com/in/armagedon/')
      cy.contains('Unggah Resume atau CV').should('be.visible')
      cy.get('input[type="file"]').attachFile(filepath).wait(5000)
      // file uploaded
      cy.contains('https://rakamin-app.[...].pdf').should('be.visible')
      cy.contains('Darimana kamu mendapatkan informasi tentang Virtual Intership Experience? ').should('be.visible')
      const kotak = cy.get('[class="sc-irmnWS lhaYTR checkbox-icon"]')
      kotak.should('be.visible')
      kotak.first().click()
      cy.contains('Agreement ').should('be.visible')
      cy.contains('Saya memahami dan berkomitmen terhadap mekanisme penyelesaian Program Virtual Internship dan selanjutnya menyatakan akan mengerjakan setiap project dengan integritas tinggi dan sungguh-sungguh').should('be.visible')
      cy.get('[data-cy="agreement-checkbox').click()
      cy.get('[data-cy="vix-form-submit-button"]').click()
      cy.get('[data-cy="button-confirm"]').contains('Lanjutkan').click()
      const VIP = cy.contains('Dapatkan Fasilitas Magang VIP Access:')
      VIP.should('be.visible')
      VIP.click()
      cy.get('[data-cy="continue-to-payment-button"]').click()
    })
  })
  