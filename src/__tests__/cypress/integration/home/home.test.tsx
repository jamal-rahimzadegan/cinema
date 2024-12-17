import React from "react";

describe("", () => {
	beforeEach(() => {
		cy.getLocalStorage();
	});

	it("navigates to the film page correctly from the categorized films", () => {
		cy.visit("http://localhost:3000/app_ticket").wait(2000);
		cy.get('div[data-testid="cat-films"]').first().click({ multiple: true });
		cy.url().should("contain", "film-page");
	});

	it("navigates to the film page correctly from the chunked films", () => {
		cy.visit("http://localhost:3000/app_ticket").wait(2000);
		cy.get(".home__chunk-film-wrapper > :nth-child(1)").click();
		cy.url().should("contain", "film-page");
	});
});
