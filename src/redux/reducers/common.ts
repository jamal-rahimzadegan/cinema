import actionTypes from "../action-types";
import { ls } from "tools";

const initialState = {
	cityListData: {
		data: ls.get("aTicketUserCity") || {},
		fetched: false,
		fetching: false,
		error: false,
	},
	chosenCityData: {
		data: {},
	},
	headerNameInput: "",
};

export default function commonReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FILTER_CITY_LIST_STARTED:
			return {
				...state,
				cityListData: {
					data: {},
					fetched: false,
					fetching: true,
					error: false,
				},
			};
		case actionTypes.FILTER_CITY_LIST_FAILED:
			return {
				...state,
				cityListData: {
					data: {},
					fetched: true,
					fetching: false,
					error: true,
				},
			};
		case actionTypes.FILTER_CITY_LIST_COMPLETED:
			// ls.set("cities", action.payload.cityListData);

			return {
				...state,
				cityListData: {
					data: action.payload.cityListData,
					fetched: true,
					fetching: false,
					error: false,
				},
			};
		case actionTypes.CHOOSE_CITY:
			ls.set("aTicketUserCity", action.payload.cityData);
			return {
				...state,
				chosenCityData: {
					data: action.payload.cityData,
				},
			};
		case actionTypes.GET_NEW_CITY_DATA:
			return {
				...state,
				chosenCityData: {
					data: ls.get("aTicketUserCity"),
				},
			};
		case actionTypes.SET_HEADER_NAME_INPUT:
			return {
				...state,
				headerNameInput: action.headerName,
			};
		default:
			return state;
	}
}
