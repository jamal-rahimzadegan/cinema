export default function getCardLast4(cardNumber) {
	if (cardNumber !== "") return cardNumber.substring(cardNumber.length - 4);
	return cardNumber;
}
