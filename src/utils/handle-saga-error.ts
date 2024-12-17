import { put } from "redux-saga/effects";
import actionTypes from "redux/action-types";
import { createAction, getResponseErrorMessage } from "utils";

interface PayloadType {
	error: any;
	extraPayload?: NestedObject;
}

export default function* handleSagaError(
	actionType: keyof typeof actionTypes,
	payload: PayloadType
) {
	const { error, extraPayload = {} } = payload;
	console.error(`--- error in api call ----> `, error);

	const errorMessage = getResponseErrorMessage(error);
	//
	// yield showAlert && popup.error(errorMessage);

	yield put(createAction(actionType, { errorMessage, ...extraPayload }));
}
