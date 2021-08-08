//loading
//fake 404

//Mani-generator sad path
it("Should tell user to add polishes to their collection before using the mani maker", () => {
  cy.get("h2")
    .contains("Please add polishes to your collection to use this feature!")
})