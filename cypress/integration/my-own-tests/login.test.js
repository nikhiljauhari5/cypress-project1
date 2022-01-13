/// <reference types="cypress" />

describe('Login Tests', () => {
    it('The webpage load, at least', () => {
        cy.visit('https://www.coursera.org/in')
    })

    // only use to run only specific test case skip all
    it('Login page looks good ', () => {
        cy.viewport(1280,720)
        cy.visit('https://www.coursera.org/in')
        cy.contains('Log In').click()

        cy.contains('Welcome back').should('exist')
        cy.contains('Continue with Google').should('exist')
        cy.contains('Continue with Facebook').should('exist')
        cy.contains('Forgot password').should('exist')
        cy.contains('New to Coursera? Sign up').should('exist')

         
    })

    // it.only('Login page looks good ', () => {
    //     cy.viewport(1280,720)
    //     cy.visit('https://www.coursera.org/in')
    //     cy.contains('Log In').click()
    //     cy.contains('Forgot password?').click()

    //     cy.url().should('include', '/?authMode=login')
    //     // cy.contains('Welcome back').should('exist')
    //     // cy.contains('Continue with Google').should('exist')
    //     // cy.contains('Continue with Facebook').should('exist')
    //     // cy.contains('New to Coursera? Sign up').should('exist')         
    // })

    // url assert used here 
    it.only('Verify URL', () => {
        cy.viewport(1280,720)
        cy.visit('https://in.linkedin.com//')

        // 1. go Sign page 
        cy.contains('Sign in').click()
        // 2. go Forgot password page
        cy.log('Going to forgot password')
        cy.contains('Forgot password?').click()
        // 3. verify your page url
        cy.url().should('include', '/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin')         
                //or
        // cy.url().should('eq', 'https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin')
        cy.url().then((value) => {
            cy.log('The Current Real URL is = ', value)
        })
        cy.log('Current URL = ', cy.url())
        // 4. Go back, on the sign in page
        cy.go('back')

        cy.contains('Join now').click()
        cy.url().should('include','/signup/cold-join?source=guest_homepage-basic_nav-header-signin')

    })
})