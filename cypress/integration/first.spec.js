context('First test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/login')
    })

    it('type wrong email', () => {
        cy.get('#email').type('alex')
            .should('have.class', 'ng-invalid');

        cy.get('.alert-danger')
            .should('contain.text', 'Campo obligatorio')
            .should('have.attr','hidden')

        cy.get('.alert-danger')
            .contains('El email es incorrecto')
    })

    it('type correct email', () => {
        cy.get('#email').type('alex@hola.com')
        cy.get('#password').type('alex');

        cy.get('[type="submit"]').click()
    })

})