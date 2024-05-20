describe('bloom baby', () => {
  it('should visit the homepage and validate elements', () => {
    cy.visit('http://localhost:3000/')
      .get('h1').contains('bLOOMbABY')
      .get('canvas')
      .get('.styled-flower-assembly').contains('p', "here's a sEEDbABY:")
      .get('.styled-new-plant-form').contains('p', "you have no flowers yet. get one in the ground!")
      .get('.plant-form-labels').contains('label', "Name yer plant")
      .get('.plant-form-labels').contains('label', "Describe yer plant")
      

      cy.get ("form").get ('input[name="name"]').type("My Baby").should("have.value", "My Baby")
      cy.get ("form").get ('input[name="description"]').type("It's a baby boy").should("have.value", "It's a baby boy")

      .get('button').contains('pLANTfLOWER')
      .click()

      .get('h1').contains('bLOOMbABY')
      .get('canvas')
      // .contains('.rotating-group')
      // .get('.billboard')
  })
})