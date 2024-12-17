import { session } from "tools";
import { httpClient } from "services";
import { put } from "redux-saga/effects";
import { createAction, handleLoading, handleSagaError } from "utils";
import { ReserveTicketPaylaod, ReserveTicketResponse } from "../types/models/api/reserve-ticket";

export default function* watchReserveTicket({ payload }) {
	try {
		handleLoading(true);
		yield put(createAction("FETCH_PRICE_STARTED"));

		const res = yield httpClient.post<ReserveTicketPaylaod, ReserveTicketResponse>("grpc", {
			data: {
				op_code: 1006,
				payload: JSON.stringify({
					...payload,
				}),
			},
		});

		session.set("aTicketReserveID", res.payload.reserve_id);

		yield httpClient.destroyQuery("FETCH_TICKET_LIST");

		yield put(
			createAction("RESERVE_COMPLETED", {
				chairs: res.payload,
			})
		);
		yield put(createAction("SET_PAYMENT_TIME"));
	} catch (error) {
		// httpClient.handleError(error, "reserve ticket");
		yield handleSagaError("RESERVE_FAILED", { error }); // TODO: remove it
	} finally {
		handleLoading(false);
	}
}
