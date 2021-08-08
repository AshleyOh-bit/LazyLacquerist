Cypress.Commands.add("loadMain", () => {
  cy.fixture('polishes.json').as('polishes')
  cy.visit(`http://localhost:3000/`)
  const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json"
  cy.intercept('GET', `${baseURL}?product_type=nail_polish`, 
      { statusCode: 200, fixture: 'polishes' })
    //.visit('http://localhost:3000')
})

Cypress.Commands.add("navToGen", () => {
  cy.get("h1")
    .click()
  cy.get("[data-cy=maniMaker]")
      .contains("Mani-Maker")
      .click()
    cy.url().should("include", "http://localhost:3000/mani-maker");
})

Cypress.Commands.add("goToCollection", () => {
  cy.get("[data-cy=myColl]")
    .click()
  cy.url().should("include", "http://localhost:3000/collection");
})

Cypress.Commands.add("add1ToCollection", () => {
  cy.get("[data-cy=polish-button]")
    .click()
  cy.get("[data-cy=brand-input]")
    .type("CND")
  cy.get("[data-cy=colorway-input]")
    .type("blackpool")
  cy.get("[data-cy=image-input]")
    .type("https://cdn.shopify.com/s/files/1/0073/2148/5397/products/CND_Shl_BlackPool_1024x1024.jpg?v=1597037056")
  cy.get('div[title*="#2196f3"]')
    .click()
  cy.get("[data-cy=form-submit]")
    .click()
})

Cypress.Commands.add("add2ToCollection", () => {
  cy.get("[data-cy=polish-button]")
    .click()
  cy.get("[data-cy=brand-input]")
    .type("OPI")
  cy.get("[data-cy=colorway-input]")
    .type("honey")
  cy.get("[data-cy=image-input]")
    .type("https://m.media-amazon.com/images/I/51WbjV8XAwL._SL1000_.jpg")
  cy.get('div[title*="#00bcd4"]')
    .click()
  cy.get("[data-cy=form-submit]")
    .click()
})