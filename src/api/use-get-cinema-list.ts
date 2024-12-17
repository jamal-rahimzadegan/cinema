import { useReactQuery } from "hooks";
import { httpClient } from "services";
import { getUserCityData } from "utils";
import { CinemaListPaylaod, CinemaListResponse } from "types/models/api/cinema-list";

export default function useGetCinemaList(showId: number) {
	const fetchCinemaList = async () => {
		const response = await httpClient.post<CinemaListPaylaod, CinemaListResponse>("grpc", {
			data: {
				op_code: 1003,
				payload: JSON.stringify({
					city_id: +getUserCityData().cityId,
					movie_id: showId,
				}),
			},
		});

		return response?.payload?.cinemas || [];
	};

	return useReactQuery<CinemaItem[]>("FETCH_CINEMA_LIST", fetchCinemaList);
}
