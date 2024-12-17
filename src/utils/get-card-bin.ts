export default function getCardBin(cardNumber) {
	if (cardNumber !== "") return cardNumber.substring(0, 6);
	return cardNumber;
}
