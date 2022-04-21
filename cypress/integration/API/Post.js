///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {
    // Cypress.config('base url', 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf') 
    it('Add a new pet to the store', function(){
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            headers: {
                'Accept': 'application/json'
            },
                body: {
                    "name": "doggie",
                    "photoUrls": [
                      "incidid",
                      "magna cillum"
                    ],
                    "id": -8982675,
                    "category": {
                      "id": -71680050,
                      "name": "dolor occaecat consectetur labore reprehenderit"
                    },
                    "tags": [
                      {
                        "id": -41305901,
                        "name": "esse proident anim reprehenderit in"
                      },
                      {
                        "id": 27069209,
                        "name": "ea"
                      }
                    ],
                    "status": "sold"
                  }
            }).then(response => {
                expect(response.status).eq(200)
                expect(response.body.name).to.equal('doggie')
            })
                
              
        })

    })

