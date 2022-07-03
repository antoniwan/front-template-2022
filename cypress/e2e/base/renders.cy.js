/// <reference types="cypress" />

describe("front-end template web application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays the header", () => {
    cy.get("header").should("be.visible");
  });
  it("displays the footer", () => {
    cy.get("footer").should("be.visible");
  });
});
