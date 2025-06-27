describe("Page d'acceuil", () => {
  it("devrait avoir un titre", () => {
    cy.visit("/");
    cy.contains('Mon Application').should('be.visible')
  });

  it("devrait incrémenter mon compteur", () => {
      cy.visit('/')
      cy.get("#counter").should("have.text", "0");
      cy.get('button[id="btn+1"]').click()
      cy.get("#counter").should("have.text", "1");
  });

  it("devrait decrement mon compteur", () => {
      cy.visit('/')

      cy.get("#counter").should("have.text", "0");
      cy.get('button[id="btn-1"]').click()
      cy.get("#counter").should("have.text", "-1");
  });

  it("devrait reset mon compteur", () => {
      cy.visit('/')

      cy.get('button[id="btn+1"]').click()
      cy.get('button[id="btn+1"]').click()
      cy.get('button[id="btn+1"]').click()
      cy.get("#counter").should("have.text", "3");
      cy.get('button[id="btn-0"]').click()
      cy.get("#counter").should("have.text", "0");

  });


})