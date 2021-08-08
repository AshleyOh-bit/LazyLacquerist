Cypress.Commands.add("loadMain", () => {
  cy.visit(`http://localhost:3000/`)
  const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type="
  cy.intercept('GET', `${baseURL}nail_polish`, 
      { statusCode: 200, fixture: 'polishes.json' })
})

Cypress.Commands.add("navToGen", () => {
  cy.get("[data-cy=maniMaker]")
      .contains("Mani-Maker")
      .click()
    cy.url().should("include", "http://localhost:3000/mani-maker");
})