import React, { useState, Fragment } from "react";
import { useGetCities } from "api";
import { httpClient } from "services";
import { validateString, popup } from "utils";
import { MOST_REPEATED_CITY_LIST } from "constant";
import { CityCard, Page, Text, Input } from "components";
import { useCallAction, useNavigation, useRetryApi } from "hooks";

export default function ChooseCity() {
	const { data = [], error, refetch: getCities } = useGetCities() || {};
	const cities = data as CityType[];
	const navigation = useNavigation();
	const callAction = useCallAction();
	const [cityName, setCityName] = useState("");
	const [searchResult, setSearchResult] = useState<CityType[]>([]);
	const hasSearchResult = !!cityName && searchResult.length > 0;

	const searchCity = (input = "") => {
		setCityName(input);

		if (!validateString(input, "perChar")) {
			setSearchResult([]);
			return;
		}

		setSearchResult(cities?.filter((item) => item.name.includes(input)));
	};

	const chooseCity = async (cityData: CityType) => {
		callAction("CHOOSE_CITY", { cityData });
		await httpClient.destroyQuery("CHOOSE_CITY"); // refetch film list on city change
		navigation.push("/");
	};

	useRetryApi(error, () => {
		popup.retry({
			message: "خطا در دریافت شهرها",
			onRetry: getCities,
		});
	});

	return (
		<Page className="p-2" pageTitle="انتخاب شهر">
			<Input
				placeholder="نام شهر را وارد نمایید"
				clearValue={() => setCityName("")}
				onChange={(e) => searchCity(e.target.value)}
			/>
			<>
				{cityName ? (
					!hasSearchResult ? (
						<Text align="center" className="my-2">
							شهر مورد نظر یافت نشد
						</Text>
					) : (
						!!cityName &&
						searchResult
							.sort((a, b) => a.name.search(cityName) - b.name.search(cityName))
							.map((cityItem, cityIndex) => (
								<Fragment key={cityIndex}>
									<CityCard
										cityId={cityItem.cityId}
										cityName={cityItem.name}
										onSelect={chooseCity}
									/>
								</Fragment>
							))
					)
				) : (
					<>
						<Text bgColor="BOX_BG" className="my-3 p-2" isBold align="right">
							شهرهای پرتکرار
						</Text>
						{MOST_REPEATED_CITY_LIST.map((city) => (
							<Fragment key={city.cityName}>
								<CityCard
									onSelect={chooseCity}
									cityName={city.cityName}
									cityId={city.cityId}
								/>
							</Fragment>
						))}
					</>
				)}
			</>
		</Page>
	);
}
