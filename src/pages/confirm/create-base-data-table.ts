export default function createBaseDataTable(ticketForm) {
	const { firstName, lastName, mobileNumber, seatCount } = ticketForm || {};

	return [
		{
			name: "نام:",
			value: firstName,
		},
		{
			name: "نام خانوادگی:",
			value: lastName,
		},
		{
			name: "شماره موبایل:",
			value: mobileNumber,
		},
		{
			name: "تعداد صندلی:",
			value: `${seatCount} بلیت`,
		},
	];
}
