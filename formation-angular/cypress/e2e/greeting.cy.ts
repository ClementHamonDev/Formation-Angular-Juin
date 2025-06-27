describe("Page d'accueil", () => {
    it("Doit afficher le titre", () => {
        cy.visit("/");
        cy.contains("Clément").should("be.visible")
    })
})