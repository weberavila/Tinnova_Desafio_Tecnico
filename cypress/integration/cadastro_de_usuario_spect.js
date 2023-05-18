describe('Cadastro', () => {
    it('Cadastro de usuário', () => {
        cy.visit('http://tinnova-teste-qa.vercel.app')

        cy.get('.sc-bczRLJ').click()
        cy.get('.sc-hKMtZM > :nth-child(3)').click()
        cy.get(':nth-child(2) > .sc-iqcoie').focus().type('Weber Avila').click()
        cy.get(':nth-child(3) > .sc-iqcoie').focus().type('weber@avila.gmail.com').click()
        cy.get(':nth-child(4) > .sc-iqcoie').focus().type('3988765412').click()
        cy.get(':nth-child(5) > .sc-iqcoie').focus().type('(11)97897865').click()
        cy.get('.sc-bczRLJ').click()

        
    })

    
})