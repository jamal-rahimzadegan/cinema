import { getCardBin, getCardLast4 } from "utils";

export default function getCardOtpStatus(tt, otpType, cardNumber) {
	const cardBin = getCardBin(cardNumber);
	const cardLast4 = getCardLast4(cardNumber);

	return new Promise((resolve, reject) => {
		(window as any)?.appGlobal?.application?.OTP?.isEnabled(
			{
				otpType: otpType,
				tt: tt,
				bin: cardBin,
				last4: cardLast4,
			},
			(response) => {
				const parsedResponse = JSON.parse(response);
				if (parsedResponse?.status) resolve(parsedResponse.status);
			}
		);
	});
}
