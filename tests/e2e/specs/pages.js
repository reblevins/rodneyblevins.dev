// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
    it('Visits the app root url', () => {
        cy.visit('/')
        cy.contains('h1', 'Rodney Blevins')
    })
    it('Home page has About link', () => {
        cy.visit('/')
        cy.get('header').get('li.menu-item').contains('About')
    })
    it('Home page has Work link', () => {
        cy.visit('/')
        cy.get('header').get('li.menu-item').contains('Work')
    })
    it('Home page has two nav links', () => {
        cy.visit('/')
        cy.get('li.menu-item').should('have.length', 2)
    })
    it('Home page has "About Me"', () => {
        cy.visit('/')
        cy.get('h3.section-header').contains('About Me')
    })
    it('Home page has 1 article element', () => {
        cy.visit('/')
        cy.get('article.work-article').should('have.length', 1)
    })
    it('Clicking on Work link goes to /work', () => {
        cy.visit('/')
        cy.get('li.menu-item').contains('Work').click()
        cy.url().should('include', '/work')
    })
})

describe('Work Page', () => {
    it('Visits the work url', () => {
        cy.visit('/work')
        cy.get('h3.section-header').contains('A sampling of my work')
    })
    it('Work page has 5 article elements', () => {
        cy.visit('/work')
        cy.get('article.work-article').should('have.length', 6)
    })
    it('Clicking on About link goes to root', () => {
        cy.visit('/')
        cy.get('li.menu-item').contains('About').click()
        cy.url().should('match', /\//)
    })
})
