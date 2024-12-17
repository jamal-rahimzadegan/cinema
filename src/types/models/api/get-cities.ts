type CitiesPaylaod = BasicPayload<1000, string>;
type CitiesResponse = BasicResponse<{ cities: CityType[] }>;

export type { CitiesPaylaod, CitiesResponse };
