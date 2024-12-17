import actionTypes from "../action-types";

const initialState = {
	ticketList: {
		data: {},
		fetching: false,
		fetched: false,
		erorr: false,
		errorMessage: "",
	},
};

export default function ticketReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_TICKET_LIST_STARTED:
			return {
				...state,
				ticketList: {
					data: {},
					fetching: true,
					fetched: false,
					erorr: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_TICKET_LIST_FAILED:
			return {
				...state,
				ticketList: {
					data: {},
					fetching: false,
					fetched: false,
					erorr: true,
					errorMessage: action.errorMessage,
				},
			};
		case actionTypes.FETCH_TICKET_LIST_COMPLETED:
			return {
				...state,
				ticketList: {
					data: action.payload.ticketListData,
					fetching: false,
					fetched: true,
					erorr: false,
					errorMessage: "",
				},
			};
		default:
			return state;
	}
}
