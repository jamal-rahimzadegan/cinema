import { render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "../../../pages/home/Home";
import { GlobalWrapper } from "../../setupTests";
import { filmResponse } from "../../misc/fake/home";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockImplementation(() => mockedAxios);

describe("Home page", () => {
	mockedAxios.post.mockResolvedValue({ payload: filmResponse });

	const { unmount } = render(
		<GlobalWrapper>
			<Home />
		</GlobalWrapper>
	);
	afterEach(() => unmount());

	it("render films on load", () => {
		const catFilmList = screen.getByTestId("cat-films");
		expect(catFilmList.children.length).not.toBe(0);
	});
});
