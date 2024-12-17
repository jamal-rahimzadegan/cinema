import actionTypes from "../action-types";

const initialState = {
	data: [],
	fetched: false,
	fetching: false,
	error: false,
	errorMessage: "",
};

export default function chairsReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_CINEMA_CHAIRS_STARTED:
			return {
				...state,
				data: [],
				fetched: false,
				fetching: true,
				error: false,
				errorMessage: "",
			};
		case actionTypes.FETCH_CINEMA_CHAIRS_FAILED:
			return {
				...state,
				data: [],
				fetched: false,
				fetching: false,
				error: true,
				errorMessage: action.errorMessage,
			};
		case actionTypes.FETCH_CINEMA_CHAIRS_COMPLETED:
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
