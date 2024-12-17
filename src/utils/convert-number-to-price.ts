export default function convertNumberToPrice(amount) {
	let prefix = "";
	if (amount < 0) prefix = "-";
	return (
		prefix +
		String(amount)
			.replace(/,/g, "")
			.replace(/-/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	);
}
