/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { 
//   cy.get('.dasdsa').type(email)
// })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


// const autoIdSelector = (id: string, nth?: number) =>
//   `[data-auto-id="${id}"]${typeof nth === 'number' ? `:eq(${nth})` : ''}`

// Cypress.Commands.add('getWithAutoId', (id, nth, options) => {
//   if (Cypress._.isObject(nth)) [options, nth] = [nth, undefined]

//   return cy.get(autoIdSelector(id, nth), options)
// })

// Cypress.Commands.add(
//     'findWithAutoId',
//     { prevSubject: true },
//     (subject, id, nth, options) => {
//       if (Cypress._.isObject(nth)) [options, nth] = [nth, undefined]
  
//       return (subject as Cypress.Chainable).find(autoIdSelector(id, nth), options)
//     }
//   )
  

// Cypress.Commands.add(
//     'findWithAutoId',
//     { prevSubject: true },
//     (subject, id, nth, options) => {
//       if (Cypress._.isObject(nth)) [options, nth] = [nth, undefined]
  
//       return (subject as Cypress.Chainable).find(autoIdSelector(id, nth), options)
//     }
//   )

Cypress.Commands.add('getIframeInputByName', (iframeSelector) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    //return (
      cy
        .get('[name="' + iframeSelector + '"]' )
        .its('0.contentDocument.body')
        .should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
        .find('input[name="' + iframeSelector + '"]')
    //)
  })

Cypress.Commands.add('getByAutoId', (selector) => {
  const s: string = '[data-auto-id="' + selector + '"]'
  cy.get(s)
})

//   Cypress.Commands.add('getIFrameWithAutoId', (selector: string) =>
//   cy.getIFrame(autoIdSelector(selector))
// )

