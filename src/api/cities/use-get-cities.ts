import { useReactQuery } from "hooks";
import { httpClient } from "services";
import { CitiesPaylaod, CitiesResponse } from "types/models/api/get-cities";

export default function useGetCities() {
	const fetchCityList = async () => {
		const res = await httpClient.post<CitiesPaylaod, CitiesResponse>("grpc", {
			data: {
				op_code: 1000,
				payload: JSON.stringify({}),
			},
		});

		return res.statusCode === 0 ? res.payload.cities : [];
	};

	return useReactQuery<CitiesResponse>("GET_CITIES", fetchCityList);
}
