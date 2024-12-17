import React from "react";
import { act, fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";

const ColorChangingButton = () => {
	const [items, setItems] = React.useState(["placeholder-text"]);

	const toggleColor = () => {
		setTimeout(() => setItems((latest) => [...latest, "new"]), 1200);
	};

	return (
		<>
			<button onClick={toggleColor}>add</button>
			<div data-testid="fake-list">
				{items.map((t) => (
					<p data-testid={t} key={t}>
						{t}
					</p>
				))}
			</div>
		</>
	);
};

it("handles async appear", async () => {
	const { container } = render(<ColorChangingButton />);
	const addBtn = screen.getByRole("button", { name: "add" });

	await act(async () => {
		fireEvent.click(addBtn);
	});

	await waitFor(() => {
		expect(getByTestId(container, "new")).toBeDefined();
	});
});
