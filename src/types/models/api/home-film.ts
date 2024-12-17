type HomePayload = BasicPayload<1001, string>; // TODO: { city_id: number }
type HomeResponse = BasicResponse<{ search_result: FilmItem[] }>;

export type { HomePayload, HomeResponse };
