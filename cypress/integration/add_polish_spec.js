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

  it("Should be disabled if user has not entered a brand but has entered a colorway", () => {
    cy.get("[data-cy=colorway-input]")
      .type("bats")
    cy.get("[data-cy=form-submit]")
      .should("be.disabled")
  })

  it("Should be disabled if the user has not entered a colorway but has entered a brand", () => {
    cy.get("[data-cy=brand-input]")
      .type("Snazzy")
    cy.get("[data-cy=form-submit]")
      .should("be.disabled")
  })

  it("Should enable the button if the brand and colorway fields are filled", () => {
    cy.get("[data-cy=brand-input]")
      .type("Snazzy")
    cy.get("[data-cy=colorway-input]")
      .type("bats")
    cy.get("[data-cy=form-submit]")
      .should("be.enabled")
  })

  it("Should change the background color of the brand OK button if user types in brand input field", () => {
    cy.get("[data-cy=brand-input]")
      .type("Snazzy")
    cy.get("[data-cy=brand-button]")
      .should("have.css", "background-color", "rgb(21, 165, 132)")
  })

  it("Should change the background color of the colorway OK button if user types in colorway input field", () => {
    cy.get("[data-cy=colorway-input]")
      .type("bats")
    cy.get("[data-cy=colorway-button]")
      .should("have.css", "background-color", "rgb(21, 165, 132)")
  })

  it.skip("Should auto-polulate the brand dropdown with options from the API while typing", () => {
    cy.get("[data-cy=brand-input]")
      .type("dio")
      .next("option").should("have.value", "dior")
      .click()
  })

  it.skip("Should auto-polulate the colorway dropdown with options from the API while typing", () => {
    cy.get("[data-cy=brand-input]")
      .type("dior")
      .next("option").should("have.value", "dior")
      .click()
    cy.get("[data-cy=colorway-input]")
      .type("Mugue")
      .next("option").should("have.value", "108 Muguet")
      .click()
  })

  it("Should be able to add a link to an image", () => {
    cy.get("[data-cy=image-input]")
      .type("https://m.media-amazon.com/images/I/51WbjV8XAwL._SL1000_.jpg")
      .should("have.value", "https://m.media-amazon.com/images/I/51WbjV8XAwL._SL1000_.jpg")
  })

  it("Should be able to choose a color from the color picker", () => {
    cy.get('div[title*="#00bcd4"]')
      .click()
  })

  it("Should be able to add new polish to collection with all fields filled", () => {
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
      cy.url().should("include", "http://localhost:3000/collection");
  })

  it("Should be able to add new polish to collection without image or color picked filled", () => {
    cy.get("[data-cy=brand-input]")
      .type("OPI")
    cy.get("[data-cy=colorway-input]")
      .type("honey")
    cy.get("[data-cy=form-submit]")
      .click()
    cy.url().should("include", "http://localhost:3000/collection");
  })

});