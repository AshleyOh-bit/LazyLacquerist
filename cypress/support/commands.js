Cypress.Commands.add("loadMain", () => {
  cy.visit(`http://localhost:3000/`)
  const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type="
  cy.intercept('GET', `${baseURL}nail_polish`, 
      { statusCode: 200, fixture: 'polishes.json' })
})