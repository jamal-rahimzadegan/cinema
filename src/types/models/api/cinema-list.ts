type CinemaListPaylaod = BasicPayload<1003, string>; // TODO:  { city_id: number; movie_id: number }
type CinemaListResponse = BasicResponse<{ cinemas: CinemaItem[] }>;

export type { CinemaListPaylaod, CinemaListResponse };
