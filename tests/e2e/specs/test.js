describe("Movies", () => {
  it("Searches movies", () => {
    cy.visit("/")
      .getByPlaceholderText(/Search your movies/)
      .type("Avengers{enter}")
      .getAllByText(/The Avengers/)
      .first()
      .click()
      .url()
      .should("eq", `${Cypress.config().baseUrl}tt0848228`)
      .getByText(/Earth's mightiest heroes/)
      .should("be.visible");
  });
});
