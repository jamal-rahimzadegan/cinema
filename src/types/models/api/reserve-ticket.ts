type ReserveTicketPaylaod = BasicPayload<1006, string>; // "{\"customer_mobile\":\"09011412753\",\"seats\":[\"3,12\"],\"block_id\":1144280}"
type ReserveTicketResponse = BasicResponse<{ reserve_id: number; total_price: number }>;

export type { ReserveTicketPaylaod, ReserveTicketResponse };
