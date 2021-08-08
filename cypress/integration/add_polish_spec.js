describe("User adds a polish to their collection", () => {
  beforeEach(() => {
    cy.loadMain()
    cy.goToCollection()
    cy.get("[data-cy=polish-button]")
    .click()
  });

  it("Should show the user the title of page", () => {
    cy.contains("h1", "The Lazy Lacquerist");
  });

  it("Should return to home page when the page when title is clicked", () => {
    cy.get("h1").click();
    cy.url().should("include", "http://localhost:3000");
  });

  it("Should direct the user to add a polish", () => {
    cy.get("h2")
      .contains("Add a polish!")
  })

  it("Should have three input fields", () => {
    cy.get("input")
      .should("have.length", "3")
  })
  
  it("Should have a color picker at the bottom", () => {
    cy.get(".circle-picker")
      .should("be.visible")
  })

  it("Should have a button to add the polish", () => {
    cy.get("[data-cy=form-submit]")
      .contains("Add me!")
  })

  it("Should disable the button if input fields are blank", () => {
    cy.get("input")
      .should("contain", "")
      cy.get("[data-cy=form-submit]")
        .should("be.disabled")
  })

});