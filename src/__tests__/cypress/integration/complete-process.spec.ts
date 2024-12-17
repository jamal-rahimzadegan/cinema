describe("Check if the project from start to end works", () => {
	beforeEach(() => {
		cy.getLocalStorage();
	});

	it("navigates to the film page correctly from the chunked films", () => {
		cy.visit("http://localhost:3000/app_ticket");
		cy.get('input[data-testid="search-bar-input"]').type("با").wait(5000);
		cy.get(".home__chunk-film-wrapper > :nth-child(1)").click();
		cy.get('[data-testid="film-details-submit"]').click();
		cy.get(".input-container__input").type("سینما ");
		cy.get('[data-testid="مشاهده سانس های روز"]').first().click();
		cy.get(".cinema-card-wrapper__sans__sans-item-wrapper__item > :nth-child(1)").click();
		cy.get('[data-testid="cinema-list-submit"]').click();
		cy.get("#first_name").type("Jamal");
		cy.get("#last_name").type("Rahimzadegan");
		cy.get('[data-testid="pick-seat-submit"]').click();
		cy.get(".seats_modal_content").click();
		cy.get('image[data-is-available="true"]').first().click({ force: true });
		cy.get(".submit-button-container").click();
		cy.get(".submit-button-container").click();
		cy.get('[data-testid="قوانین و مقررات"]').click();
		cy.go("back");
		cy.get(".submit-button-container").click();
	});
});
