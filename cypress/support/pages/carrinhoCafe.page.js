    class CarrinhoCafe {
        selectors = {
        cafeEspresso:"[data-test='Espresso']",
        cafeMacchiato:"[data-test='Espresso_Macchiato']",
        cafeCappuccino:"[data-test='Cappuccino']",
        validarPromocao:".promo",
        aceitarPromocao:"button.yes",
        cart:'a[href="/cart"]'
        
    }
        acessarPagina() {
        cy.visit('/');
    }
        cafeCard() {
        cy.get(this.selectors.cafeEspresso).click();
        cy.get(this.selectors.cafeMacchiato).click();
        cy.get(this.selectors.cafeCappuccino).click();
    
    }
        validarMocha(){
        cy.get(this.selectors.validarPromocao).should('contain.text', "It's your lucky day! Get an extra cup of Mocha for $4.");
        cy.get(this.selectors.aceitarPromocao).should('have.text', 'Yes, of course!').click();
        }
        selecionarCart(){
             cy.get(this.selectors.cart).should('have.text', 'cart (4)').click();
        }
        confirmarValores(){
            cy.get('ul[data-v-8965af83=""] > :nth-child(2)').should('contain.text', '$4.00');
            cy.get('ul[data-v-8965af83=""] > :nth-child(3)').should('contain.text', '$19.00');
            cy.get('ul[data-v-8965af83=""] > :nth-child(4)').should('contain.text', '$10.00');
            cy.get('ul[data-v-8965af83=""] > :nth-child(5)').should('contain.text', '$12.00');
        }
        removerItem(){
            cy.get(':nth-child(2) > .unit-controller > [aria-label="Remove one Espresso Macchiato"]').click();
        }
        pagamento(){
            cy.get('[data-test="checkout"]').click();
            cy.get('[name="name"]').type('João freire');
            cy.get('[name="email"]').type('freireneto92@gmail.com');
            cy.get('#submit-payment').click()
        }
        validacaoCompra(){
            cy.get('.snackbar').should('be.visible').and('have.text', 'Thanks for your purchase. Please check your email for payment.');
        }

}
export default new CarrinhoCafe();