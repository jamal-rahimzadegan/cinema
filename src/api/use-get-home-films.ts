import { HomePayload, HomeResponse } from "types/models/api/home-film";
import { httpClient } from "services";
import { useReactQuery } from "hooks";
import { ls } from "tools";

export default function useGetHomeFilms() {
	const cityId = ls.get<CityType>("aTicketUserCity")?.cityId;

	const fetchHomeFilms = async () => {
		const res = await httpClient.post<HomePayload, HomeResponse>("grpc", {
			data: { op_code: 1001, payload: JSON.stringify({ city_id: +cityId }) },
		});

		return res?.payload?.search_result || [];
	};

	return useReactQuery<HomeResponse>("CHOOSE_CITY", fetchHomeFilms);
}
