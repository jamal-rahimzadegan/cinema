import { handleLoading } from "utils";
import { httpClient } from "services";
import { ls } from "tools";
import {
	SignPayload,
	IssueTicketPaylaod,
	IssueTicketResponse,
} from "types/models/api/issue-ticket";

interface Payload {
	payload: {
		signPayload: SignPayload;
		paymentCallback: Function;
	};
}

export default function* watchIssueTicket({ payload }: Payload) {
	const { signPayload, paymentCallback } = payload;

	try {
		handleLoading(true);

		// Refer to payment gateway for more info not the backend dev

		const signResponse = yield httpClient.post<IssueTicketPaylaod, IssueTicketResponse>(
			"sign",
			{
				data: {
					payload: signPayload,
					op_code: 228,
					amount: String(signPayload.amount),
				},
			}
		);

		const paymentData = {
			PaymentId: "PaymentId",
			SubOpCode: "1",
			PaymentChanelID: "1",
			TitleFa: "پرداخت بلیت سینما",
			DescriptionFa: "برای اطمینان از صدور بلیت به صفحه بلیت‌های من مراجعه کنید.",
			TitleEn: "Ticket Payment",
			PointEnabled: "false",
			ApsanCreditEnabled: "false",
			DirectDebitEnabled: "false",
			HostRequestData: signResponse,
			Amount: signPayload.amount,
			onWebModalClose: paymentCallback,
			BackTime: 0, // Automatic back after payment
		};

		console.info("Payment payload for cinema is:", paymentData);
		ls.set("aTicketTicketId", signResponse);

		// TODO: save the ticketId in LS and use it in the result page (clear it after all)

		// starting the payment process
		(window as any)?.appGlobal?.application?.startPayment(paymentData, paymentCallback);
	} catch (error) {
		httpClient.handleError(error, "cinema payment");
	} finally {
		handleLoading(false);
	}
}
