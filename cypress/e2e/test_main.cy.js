/// <reference types="cypress" />

describe('Place order', () => {
    beforeEach(() => {
        cy.visit ('/', {
            auth: {
                username: '',
                password: ' '
            },
        })
        cy.intercept('**/baskets').as('restoreBasket')
        cy.wait('@restoreBasket', {timeout: 90000})
        cy.getByAutoId("glass-gdpr-default-consent-accept-button").click()
        cy.intercept('**/GB?limit=200&text=London').as('loqateRequest')
        cy.intercept('GET', '**/shipment').as('getShipment')
        // .its('body').then(body => {
        //     const latestShipmentHash = body[home].products[shipmentOptions].shipmentHash
        //     cy.fixture('mockSippingMethods').then(addLatestHash => {
        //         addLatestHash[home].products[shipmentOptions].shipmentHash = latestShipmentHash
        //         cy.intercept('PATCH', '**/shipment', {fixture: 'mockShippingMethods.json'})
        //     })
        // })

       

        cy.intercept('**/eu-test.oppwa.com/v1/*').as('paymentWidgets')
    })


    it('Happy flow', () => {
        cy.getByAutoId("logo").should('have.text', 'adidas')

        cy.getByAutoId("glass-checkout-button-right-side").click()

        cy.wait('@getShipment', {timeout: 9000}).then(({response}) => {
            expect(response.statusCode).to.eq(200)
           
            
    //         expect(response.body[1].products[0]).to.contain('BB1306')
    //     })
    //    cy.intercept('GET', '**/shipment').its('response.body').then(body => {
    //         const latestShipmentHash = body[home].products[shipmentOptions].shipmentHash
    //         cy.fixture('mockSippingMethods').then(addLatestHash => {
    //             addLatestHash[home].products[shipmentOptions].shipmentHash = latestShipmentHash
    //             cy.intercept('PATCH', '**/shipment', {fixture: 'mockShippingMethods.json'})
    //         })
    //response.body.home[0].products[0]
        console.log(response.body.home[0].shipmentOptions[0].shipmentHash)
         })

    //     cy.getByAutoId("delivery-options-heading", {timeout: 90000})
    //     cy.getByAutoId("shippingAddress-firstName").type('John')
    //     cy.getByAutoId("shippingAddress-lastName").type('Doe')
    //     cy.getByAutoId("inline-search-input").type('London')
    //     cy.wait('@loqateRequest', {timeout: 90000})
    //     cy.getByAutoId("inline-address-suggestions-results-item").first().click()
    //     cy.wait('@getShipment', {timeout: 90000})        
        
    //     cy.intercept('GET', '**/shipment', {fixture: 'mockShippingMethods.json'})
        
    //     cy.getByAutoId("selected-address-suggestion-title")
    //     cy.getByAutoId("shippingAddress-emailAddress").type('accept_jp@adidas.com')
    //     cy.getByAutoId("review-and-pay-button").click()
   
    //     cy.wait('@paymentWidgets', {timeout: 90000})
    //     cy.getByAutoId("name-on-card-field", {timeout: 9000})
    //     cy.getIframeInputByName("card.number")
    //     .type('4200000000000000')

    //     cy.getByAutoId("expiry-date-field").type('0330')

    //     cy.getIframeInputByName("card.cvv")
    //     .type('737')

    //     cy.getByAutoId("place-order-button").click()
        

        
    
     })
})