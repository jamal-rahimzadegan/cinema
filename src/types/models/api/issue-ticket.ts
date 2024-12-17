interface SignPayload {
	customer_name: string;
	customer_family: string;
	customer_mobile: string;
	reserve_id: number;
	amount: number;
	block_id: number;
	seats: string[];
}

interface StartPaymentResponse {
	message: string;
	host_response: string; //'{"hi":2356,"htran":153491356,"htime":1656397817,"hop":209,"st":0,"ao":330000,"stkn":"s7dp7li7hak9ri9d4fed76o02q","rrn":"042925922058","stm":""}'
	host_response_sign: string; // "1#1#oEQv3vYXNXKxFttOe0BjHZbKZ/mXCqfoJ3a9WBpzgF9hN2aOmytTX0o/uNLltMhy43/IBpyelGDFjsYY/VahFC7m9GkRvluWPzFArJghClgyX55l5ROu2WgSZm8KqEIHB3msq9CEnKfFIr5YKormk20RzUKWkYK4YqMmodYAbbDqpM8vhB0q7Iw2ERdylmh8B+9Py/GO9XMZV3tgG1G4scrzWxeJr3xy4ZfUvCQ8NE3Uk7DQ4KMLcQ7QY7uUn0zX9zWohmc+RQHwuUh3JqSai1/FejS7+rCLU2UCkbREQKchSJ3w6edNTBe0/Zz8NS9JyrOTL+qaQasavVHeoyRd5w==",
	unique_tran_id: number; // 235616563978175237
	status_code: 0 | 2020 | 1001 | 1201; //0: Success / 2020: Cancelled / 1201: Unknown / 1001:?
}

type IssueTicketPaylaod = BasicPayload<228, SignPayload>;

interface ReservePayload {
	payload: { customer_mobile: string; block_id: number; seats: string[] };
}

interface IssueTicketResponse {
	total_price: string;
	reserve_id: string;
}

export type {
	IssueTicketPaylaod,
	StartPaymentResponse,
	IssueTicketResponse,
	SignPayload,
	ReservePayload,
};

let x = {
	tr: 1046,
	st: 0,
	op: 209,
	sc: 1,
	ds: "ok",
	sm: "1656401945;14400",
	te: 1656401940,
	hi: 88,
	hd: {
		hresp: '{"hi":308,"htran":16564018754112,"htime":1656401875,"hop":228,"st":0,"ao":229500,"rrn":"042927649671","stm":""}',
		hsign: "1#1#Os6gwIivnbJ6OxstDqvX7tvxeprZJsuYYGeNhGpPYwEZ+Qm7wTXoAwNM4t9P8dHrWwtUsrSRhMcYPKM3u6riBCbOJ0k617E5Bur6tX9adrc5wb4aArUHsDtkpbhvC5LJviZ3E+MxrKFjtKTcVTbFvR62Pcah8HdPbRCJDQ+BQg9cAv63aTSO9nAkJZWqGHmvIZSTreikOn+wUnlY88F7iPpX+OZL/7iP7+R3XdUio8KE1Hs64eNzQlUNqkG6NXncuzUUVugf8MgkctUOkGyhUxaw4/ZC3ueiynJEwubMdNCje2GYWHYt4vZECIP38Hm/7pvpMxwUhOYNTgwQ9i94Rw==",
		hstat: 0,
	},
	ad: " ",
	pi: 0,
	ed: [],
	ej: { provider_ticket_id: 32626668 },
	fj: {},
	rn: "042927649671",
	cd: "0;0&&2&&0;0;0;0",
	as: "",
};
