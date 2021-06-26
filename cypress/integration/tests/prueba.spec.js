/// <reference types="cypress" />

describe('Basic test',()=>{

  beforeEach(()=>{
    cy.viewport(1280,720)
    cy.visit('http://localhost:4200')
  })
  it('login test',() => {

    cy.contains('Premios');
    cy.get('[id=btnLogin]').click()
    cy.get('[id=inpUsernameLogin]').type('c@c.com')
    cy.get('[id=inpPasswdLogin]').type('123')
    cy.get('[id=btnLoginConf]').click()
    cy.url().should('contain','userhome')
  })

})
