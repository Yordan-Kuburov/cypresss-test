// import './commands'
declare namespace Cypress {
     interface Chainable{
          getIframeInputByName(iframeSelector: string): Chainable<Element>
          getByAutoId(selector: string): Chainable<Element>
     }

}