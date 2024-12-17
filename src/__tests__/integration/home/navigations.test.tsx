import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../../pages/home/Home";
import { GlobalWrapper } from "../../setupTests";

describe("Home Page navigation is working", () => {
	beforeEach(() => {
		render(
			<GlobalWrapper>
				<Home />
			</GlobalWrapper>
		);
	});

	it("to city list", async () => {
		const cityBtn = await screen.findByTestId("city-btn");
		fireEvent.click(cityBtn);
		const route = window.location.pathname;
		expect(route).toContain("choose-city");
	});

	it("to my tickets", async () => {
		const myTicketBtn = await screen.findByTestId("go-to-my-tickets");
		fireEvent.click(myTicketBtn);
		const route = window.location.pathname;
		expect(route).toContain("ticket");
	});
});
