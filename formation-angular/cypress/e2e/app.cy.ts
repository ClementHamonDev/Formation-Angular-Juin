describe("Page d'acceuil", () => {
  it("devrait avoir un titre", () => {
    cy.visit("/");
    cy.contains('Mon Application').should('be.visible')
  });

  it("devrait incrémenter mon compteur", () => {
      cy.visit('/')
      cy.get("#counter").should("have.text", "0");
      cy.get('button[id="btn"]').click()
      cy.get("#counter").should("have.text", "1");
  });
})