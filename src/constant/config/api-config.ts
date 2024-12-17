interface ApiConfig {
	timeout: number;
	url: {
		grpc: string;
		sign: string;
		cities: string;
	};
	errorMessages: {
		authorization: string;
		unknown: string;
		network: string;
		billNotFound: string;
		access: string;
	};
	opCodes: OpCodes;
	defaultCity: CityType;
}

const apiConfig: ApiConfig = {
	timeout: 1000, // TODO: make it 15000
	url: {
		grpc: "/LINK_TO/grpc/",
		sign: "/LINK_TO/sign/",
		cities: "/LINK_TO/cities/",
	},
	errorMessages: {
		authorization: " خطای دسترسی به سرویس ",
		unknown: " خطای نامشخص ",
		network: "لطفا اتصال خود را به اینترنت برقرار سازید",
		billNotFound: "قبض مورد نظر یافت نشد",
		access: "خطا در ارتباط با سرور",
	},
	opCodes: {
		cities: 1000,
		filmList: 1001,
		filmDetail: 1003,
		myTickets: 1004,
		cinemaChairs: 1005,
		reserve: 1006,
		ticketDetails: 1008,
		issueTicket: 228,
	},
	defaultCity: {
		name: "تهران",
		cityId: "2283",
	},
};

export default apiConfig;
