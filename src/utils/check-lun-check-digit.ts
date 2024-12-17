export default function checkLunCheckDigit(cardNumber) {
	let sum = 0;
	for (let i = cardNumber.length - 1; i >= 0; i--) {
		if (i % 2 === 0) {
			let d = (cardNumber.charAt(i) - 48) * 2;
			if (d > 9) d = d - 9;
			sum += d;
		} else {
			sum += cardNumber.charAt(i) - 48;
		}
	}
	return sum % 10 === 0;
}
