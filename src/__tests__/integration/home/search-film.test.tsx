import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "../../../pages/home/Home";
import { GlobalWrapper } from "../../setupTests";
import { filmResponse } from "../../misc/fake/home";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockImplementation(() => mockedAxios);

describe("", () => {
	mockedAxios.post.mockResolvedValue({ payload: filmResponse });

	const { unmount } = render(
		<GlobalWrapper>
			<Home />
		</GlobalWrapper>
	);
	afterEach(() => unmount());

	it("shows films on search", () => {
		const filmNameInput = screen.getByTestId("search-bar-input");
		const chunkedFilmList = screen.getByTestId("home-film-list");
		fireEvent.change(filmNameInput, { target: { value: "آتابا" } });
		expect(chunkedFilmList.children.length).toBeGreaterThan(1);
	});
});
