import { useReactQuery } from "hooks";
import { httpClient } from "services";
import { TicketPaylaod, TicketResponse } from "types/models/api/ticket-details";

//
export default function useGetTicketDetails(reserveId: number) {
	const fetchDetails = async () => {
		const response = await httpClient.post<TicketPaylaod, TicketResponse>("grpc", {
			data: {
				op_code: 1008,
				payload: JSON.stringify({
					reserve_id: reserveId,
				}),
			},
		});

		return response?.payload?.ticket || {};
	};

	return useReactQuery<Ticket>("FETCH_TICKET_DETAILS", fetchDetails);
}
