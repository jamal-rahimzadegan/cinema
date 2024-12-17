export default function maskCardNumber(cardNumber) {
	if (cardNumber.length === 16) {
		return "****-****-****-" + String(cardNumber).substring(12, 16);
	} else if (cardNumber.length === 19) {
		return "****-****-****-****-" + String(cardNumber).substring(16, 19);
	} else return "";
}
