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

            // if we want to click the any button we use this type of get 
        // cy.get('[data-e2e=header-signup-button]').click()



        cy.get('div#rendered-content').should('exist')
                    // or
        // cy.get('div[id=rendered-content]').should('exist')

        cy.get('div#not-rendered-content').should('not.exist')


        //// cy.should

        cy.contains('Start Learning with Free').should('have.text', 'Start Learning with Free Courses')


    })

    it('View port', () => {
        cy.viewport(1280,720)
        // cy.viewport('ipad-2')
        cy.visit('https://google.com')
    })

    it('View port for mobile', () => {
        cy.viewport('iphone-xr')
        cy.visit('https://google.com')
    })
})