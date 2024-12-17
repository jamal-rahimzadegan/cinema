import React, { useEffect, useState } from "react";
import axios from "axios";
import { act, render, waitFor } from "@testing-library/react";

function TestComponent() {
	const [name, setName] = useState("no name");

	const getUsers = async () => {
		try {
			const results = await axios.get("https://randomuser.me/api/?results=5");
			setName(results.data.user);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return <>{name}</>;
}

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("api", () => {
	it("", async () => {
		await act(async () => {
			await mockedAxios.get.mockResolvedValue({ data: { user: "jamal" } });
			await waitFor(async () => {
				const { debug } = await render(<TestComponent />);
				await debug();
			});
		});
	});
});
