///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {
    // Cypress.config('base url', 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf') 
    it('get user access key', function(){
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=available',
            headers: {
                'Accept': 'application/json'
            }
            }).then(response => {
                expect(response.status).eq(200)
                expect(response.body[0].name[2]).to.equal('doggie')
            })
                
              
        })

    })
    it.skip('get nav history', function () {

        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=available',
            headers: {
                'Accept': 'application/json'
            },
            }).as('navprice')
            .then(response => {
                expect(response.status).eq(200)
                expect(response.body).to.have.property('response')
                expect(response.body).to.not.be.null
                expect(response.body.response).to.have.length(955)
                // expect(response.body.response).to.have.length(0).to.include
                expect(response.body.response[0].nav_value).to.eq('1000.0000')
            })
    })


