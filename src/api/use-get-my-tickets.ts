import { useReactQuery } from "hooks";
import { httpClient } from "services";
import { TicketsPaylaod, TicketsResponse } from "types/models/api/my-tickets";

export default function useGetMyTickets() {
	const fetchTickets = async () => {
		const res = await httpClient.post<TicketsPaylaod, TicketsResponse>("grpc", {
			data: {
				payload: JSON.stringify({}),
				op_code: 1004,
			},
		});

		return res.payload;
	};

	return useReactQuery<TicketsResponse>("FETCH_TICKET_LIST", fetchTickets, {
		enabled: false,
		staleTime: 0,
	});
}
