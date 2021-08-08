describe("User visits the homepage tests", () => {
  beforeEach(() => {
    cy.loadMain()
    cy.navToGen()

  //add polishes in other view?
  //hook up fixture somehow?
  });

  it("Should show the user the title of page", () => {
    cy.contains("h1", "The Lazy Lacquerist");
  });

  it("Should return to home page when the page when title is clicked", () => {
    cy.get("h1").click();
    cy.url().should("include", "http://localhost:3000");
  });

  it("Should show the user directive text", () => {
    cy.get("h2")
      .contains("Generate a random manicure")
  })

  it("Should advise user on how to user the manicure generator", () => {
    cy.get("h3")
      .contains("Click the arrows to choose up to 10 colors from your collection!")
  })

  it("Should have an input field for numbers", () => {
    cy.get("input[type='number']")
    .should("have.value", "0")
  })
 
  it("Should be able to type numbers", () => {
    cy.get("input[type='number']")
      .type("1")
      .should("have.value", "01")
  })

  it("Should not be able to type letters", () => {
    cy.get("input[type='number']")
      .type("hiya")
      .should("have.value", "0")
  })

  it("Should not be able to input negative numbers", () => {
    cy.get("input[type='number']")
      .type("-1")
    cy.get("[data-cy=generate]")
      .should("be.disabled")
  })

  it("Should not be able to input decimal numbers", () => {
    cy.get("input[type='number']")
      .type(".1")
    cy.get("[data-cy=generate]")
      .should("be.disabled")
  })

  it("Should not be able to input a number larger than the current user's collection length", () => {
    cy.get("input[type='number']")
      .type("100")
    cy.get("[data-cy=generate]")
      .should("be.disabled")
  })

  it("button should be enabled if a number is input", () => {
    cy.get("input[type='number']")
      .type("1")
      .should("have.value", "01")
    cy.get("[data-cy=generate]")
      .should("be.enabled")
  })

  it("Should have a button to generate the manicure", () => {
    cy.get("input[type='number']")
      .type("1")
    cy.get("[data-cy=generate]")
      .should("be.enabled")
  })

  it("Should disable the button after redirect", () => {
    cy.get("[data-cy=generate]")
      .should("be.disabled")
  })

  it("Should contain a display area for the generated polishes", () => {
    cy.get(".mani-color-section")
  })

  it("Should display polishes from the collection when given a correct input", () => {
    cy.get("input[type='number']")
      .type("1")
    cy.get("[data-cy=generate]")
      .click()
    cy.get(".swatch-info")
      .contains("CND: blackpool")
  })

  it("Should display nothing if 0 is input", () => {
    cy.get("input[type='number']")
      .type("0")
    cy.get("[data-cy=generate]")
      .click()
    cy.get(".mani-color-section")
    cy.get(".swatch-info")
      .should("not.exist")
  })
  
});