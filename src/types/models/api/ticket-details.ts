type TicketPaylaod = BasicPayload<OpCodes["ticketDetails"], string>; // TODO:  { reserve_id: number }
type TicketResponse = BasicResponse<{ ticket: Ticket }>;

export type { TicketPaylaod, TicketResponse };
