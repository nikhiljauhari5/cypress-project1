/// <reference types="cypress" />

describe('Login Tests', () => {
    it('The webpage load, at least', () => {
        cy.visit('https://www.coursera.org/in')
    })

    // only use to run only specific test case skip all
    it.only('Login page looks good ', () => {
        cy.viewport(1280,720)
        cy.visit('https://www.coursera.org/in')
        cy.contains('Log In').click()

        cy.contains('Welcome back').should('exist')
        cy.contains('Continue with Google').should('exist')
        cy.contains('Continue with Facebook').should('exist')
        cy.contains('Forgot password').should('exist')
        cy.contains('New to Coursera? Sign up').should('exist')

         
    })
})