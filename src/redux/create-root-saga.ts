//@ts-nocheck
import { all, takeEvery } from "redux-saga/effects";
import watchIssueTicket from "api/watch-issue-ticket";
import actionTypes from "./action-types";
import watchReserveTicket from "../api/watch-reserve-ticket";

export default function* createRootSaga() {
	yield all([
		takeEvery(actionTypes.RESERVE_AND_GET_PRICE, watchReserveTicket),
		takeEvery(actionTypes.ISSUE_TICKET, watchIssueTicket),
	]);
}
