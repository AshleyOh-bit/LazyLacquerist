describe("Sad path user flows", () => {
  it("Should tell the user if a network error has occurred", () => {
  const baseURL = "http://makeup-api.herokuapp.com/api/v/products.json"
  cy.intercept('GET', `${baseURL}?product_type=nail_polish`, 
      { statusCode: 404, body: 'error' })
    .visit('http://localhost:3000')
    cy.get("h2")
      .contains("Something went wrong, please try again!")
  })

  it("Should tell the user when the page is loading", () => {
    cy.loadMain()
    cy.wait(3000)
    cy.get("h2")
      .contains("Loading...")
  })

  it("Should tell user to add polishes to their collection before using the mani maker", () => {
    cy.loadMain()
    cy.navToGen()
    cy.get("h2")
      .contains("Please add polishes to your collection to use this feature!")
  })

  it("Should redirect the user if they type in a bad url", () => {
    cy.loadMain()
    cy.visit('http://localhost:3000/colection')
    cy.url().should("contain", "page-not-found")
    cy.get("h2")
      .contains("page not found")
  })

  it("Should redirect the user if they type in a bad url after collection", () => {
    cy.loadMain()
    cy.visit('http://localhost:3000/collection/kajhsk')
    cy.url().should("contain", "page-not-found")
    cy.get("h2")
      .contains("page not found")
  })

  it("Should redirect the user if they type in a bad url after add-a-polish", () => {
    cy.loadMain()
    cy.visit('http://localhost:3000/add-a-polish/kajhsk')
    cy.url().should("contain", "page-not-found")
    cy.get("h2")
      .contains("page not found")
  })

  it("Should redirect the user if they type in a bad url after main-maker", () => {
    cy.loadMain()
    cy.visit('http://localhost:3000/mani-maker/kajhsk')
    cy.url().should("contain", "page-not-found")
    cy.get("h2")
      .contains("page not found")
  })

});
