export default function addDashToCardNumber(cardNumber) {
	if (cardNumber.length === 16) {
		return `${String(cardNumber).substring(0, 4)}-${String(cardNumber).substring(
			4,
			8
		)}-${String(cardNumber).substring(8, 12)}-${String(cardNumber).substring(12, 16)}`;
	} else if (cardNumber.length === 19) {
		return `${String(cardNumber).substring(0, 4)}-${String(cardNumber).substring(
			4,
			8
		)}-${String(cardNumber).substring(8, 12)}-${String(cardNumber).substring(12, 16)}-${String(
			cardNumber
		).substring(16, 19)}`;
	} else return "";
}
