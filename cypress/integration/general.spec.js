/// <reference types="cypress" />

context('General Test', () => {
    it('Home page', () => {
        cy.visit('http://localhost:3000')
        cy.get('h1').contains('OnlyDesk Client 🌝')
    })
})
