type TicketsPaylaod = BasicPayload<1004, string>;
type TicketsResponse = BasicResponse<{
	active_tickets: Ticket[];
	non_active_tickets: Ticket[];
	not_issued_tickets: Ticket[];
}>;

export type { TicketsPaylaod, TicketsResponse };
