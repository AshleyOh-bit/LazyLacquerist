describe("User visits the homepage tests", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it("Should show the user the title of page", () => {
    cy.contains("h1", "The Lazy Lacquerist");
  });

  it("Should reload the page when title is clicked", () => {
    cy.get("h1").click();
    cy.url().should("include", "http://localhost:3000");
  });

  it("Should display two buttons", () => {
    cy.get(".nav-home")
      .should("have.length", 2)
  })

  it("Should display an image on load", () => {
    cy.get("img")
      .should("be.visible")
  })

  it("Should welcome the user", () => {
    cy.get("h2")
      .contains("Welcome!")
  })
 
  it("Should provide directive text", () => {
    cy.get("h3")
      .contains("Would you like to generate a new mani palette or see your collection?")
  })

  it("Should redirect user to the mani maker if the mani maker button is clicked", () => {
    cy.get("[data-cy=maniMaker]")
      .contains("Mani-Maker")
      .click()
    cy.url().should("include", "http://localhost:3000/mani-maker");
  })
    
  it("Should redirect user to their collection if the collection button is clicked", () => {
    cy.get("[data-cy=myColl]")
      .contains("My Collection")
      .click()
    cy.url().should("include", "http://localhost:3000/collection");
  })
  
});