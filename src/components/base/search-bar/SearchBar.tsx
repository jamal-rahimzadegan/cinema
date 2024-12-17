import React, { useContext } from "react";
import { ChooseCityBtn, StyledHeader } from "pages/home/style";
import { getUserCityData } from "utils";
import { useNavigation } from "hooks";
import { HomeContext } from "context";
import { Input } from "components";

export default function SearchBar(): JSX.Element {
	const navigate = useNavigation();
	const { name = "" } = getUserCityData();
	const { searchMovie } = useContext(HomeContext);

	return (
		<StyledHeader>
			<Input
				id="home-search-bar"
				testId="search-bar-input"
				placeholder="جستجو فیلم"
				onChange={(e) => searchMovie(e.target.value)}
			/>
			<ChooseCityBtn
				className="rounded w-1/4"
				data-testid="city-btn"
				aria-label="انتخاب شهر"
				onClick={() => navigate.push("/choose-city")}
			>
				{name}
			</ChooseCityBtn>
		</StyledHeader>
	);
}
