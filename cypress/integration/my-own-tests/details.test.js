/// <reference types="cypress" />

describe('Typing with Cypress', () => {
    it('Login should work fine', () => {
        cy.viewport(1280,720)
        cy.visit('https://in.linkedin.com//')

        cy.contains('Sign in').click()

        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[id=username]').type('admin@gmail.com')
        cy.get('[id=password]').type('adminpass')

        cy.get('[data-litms-control-urn=login-submit]').click()

        cy.contains('Unable to authorize').should('exist')
    })

    it.only('Login should work fine', () => {
        cy.viewport(1280,720)
        cy.visit('https://www.spotify.com/in-en/')

        cy.contains('Log in').click()

        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[id=login-username]').type('admin@gmail.com')
        cy.get('[id=login-password]').type('adminpass')

        cy.get('[data-testid=login-button]').click()
        // cy.get('[data-litms-control-urn=login-submit]').click()

    })
})