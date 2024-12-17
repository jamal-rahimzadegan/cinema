import { getCardBin, getCardLast4 } from "utils";

export default function getOtp(tt, otpType, cardNumber, forceLogin = false) {
	const cardBin = getCardBin(cardNumber);
	const cardLast4 = getCardLast4(cardNumber);
	return new Promise((resolve, reject) => {
		(window as any)?.appGlobal?.application?.OTP?.getOtp(
			{
				otpType: otpType,
				tt: tt,
				bin: cardBin,
				last4: cardLast4,
				forceLogin: forceLogin,
			},
			function (response) {
				const parsedResponse = JSON.parse(response);
				resolve(parsedResponse);
			}
		);
	});
}
