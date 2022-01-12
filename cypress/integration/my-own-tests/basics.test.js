/// <reference types="cypress" />

describe('Basic Tests', () => {
    it('We have correct page title', () => {
        cy.visit('https://www.coursera.org/in')
        // mocha
        // partial testing
        // cy.contains('Learn').should('exist')
            
            // Way 1
        cy.contains('Join for Free')

            // Way 2
        cy.get('.css-je23cs > button > span')

            // Way 3
        cy.get('[data-e2e=header-signup-button]')

        cy.get('[data-e2e=header-signup-button]').click()



        cy.get('div#rendered-content').should('exist')
                    // or
        // cy.get('div[id=rendered-content]').should('exist')

        cy.get('div#not-rendered-content').should('not.exist')


    })
})