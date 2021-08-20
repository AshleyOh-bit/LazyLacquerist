
describe("User visits their collection page", () => {
  beforeEach(() => {
    cy.loadMain()
    cy.goToCollection()
  });

  it("Should show the user the title of page", () => {
    cy.contains("h1", "The Lazy Lacquerist");
  });

  it("Should return to home page when the page when title is clicked", () => {
    cy.get("h1").click();
    cy.url().should("include", "http://localhost:3000");
  });

  it("Should direct the user to add to their collection if there are no polishes in their collection", () => {
    cy.get("h2")
      .contains("Add a polish to get started!")
  })

  it("Should have a button to add a polish", () => {
    cy.get("[data-cy=polish-button]")
    .contains("Add a polish")
  })

  it("Should redirect to add polish view when clicked", () => {
    cy.get("[data-cy=polish-button]")
      .click()
    cy.url().should("include", "http://localhost:3000/add-a-polish");
  })

  it.skip("Should display polishes in the collection", () => {
    cy.add1ToCollection()
    cy.add2ToCollection()
    cy.get(".card")
      .should("have.length", "2")
  })

  it("Should display details of polishes in collection", () => {
    cy.add1ToCollection()
    cy.add2ToCollection()
    cy.get(".polish-image")
      .should("be.visible")
    cy.get(".brand-name")
      .contains("Brand: CND")
    cy.get(".colorway")
      .contains("Colorway: blackpool")
    cy.get(".hue-display")
      .contains("Hue:")
  })

});
