import actionTypes from "../action-types";

const initialState = {
	data: [], // TODO: our data probably is not an array( I don't know bc back is not ready)
	fetched: false,
	fetching: false,
	error: false,
	errorMessage: "",
};

export default function priceReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_PRICE_STARTED:
			return {
				...state,
				data: [],
				fetched: false,
				fetching: true,
				error: false,
				errorMessage: "",
			};
		case actionTypes.FETCH_PRICE_INIT:
			return {
				data: [],
				fetched: false,
				fetching: false,
				error: false,
				errorMessage: "",
			};
		case actionTypes.RESERVE_FAILED:
			return {
				...state,
				data: [],
				fetched: false,
				fetching: false,
				error: true,
				errorMessage: action.payload.errorMessage,
			};
		case actionTypes.RESERVE_COMPLETED:
			return {
				...state,
				data: action.payload.chairs,
				fetched: true,
				fetching: false,
				error: false,
				errorMessage: "",
			};
		default:
			return state;
	}
}
