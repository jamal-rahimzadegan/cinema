type SeatsPaylaod = BasicPayload<1005, string>; // TODO:  {"samfaa_schedule_id\":\"1144280\",\"reserve_id\":null}
type SeatsResponse = BasicResponse<{
	blocks: Array<{
		id: string;
		row_label: string;
		seats: SeatItem[];
	}>;
}>;

export type { SeatsPaylaod, SeatsResponse };
