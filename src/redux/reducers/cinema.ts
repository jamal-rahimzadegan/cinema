import actionTypes from "../action-types";

const initialState = {
	cinemaList: {
		data: {},
		fetched: false,
		fetching: false,
		error: false,
		errorMessage: "",
	},
	scheduleList: {
		data: [],
		fetched: false,
		fetching: false,
		error: false,
		errorMessage: "",
	},
};

export default function cinemaReducer(state = initialState, action) {
	const currentCinemaListData = { ...state.cinemaList.data };
	const currentSchedules = [...state.scheduleList.data];

	switch (action.type) {
		case actionTypes.FETCH_CINEMA_LIST_STARTED:
			return {
				...state,
				cinemaList: {
					data: {},
					fetched: false,
					fetching: true,
					error: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_CINEMA_LIST_FAILED:
			return {
				...state,
				cinemaList: {
					data: {},
					fetched: false,
					fetching: false,
					error: true,
					errorMessage: action.errorMessage,
				},
			};
		case actionTypes.FETCH_CINEMA_LIST_COMPLETED:
			return {
				...state,
				cinemaList: {
					data: action.payload.cinemaList,
					fetched: true,
					fetching: false,
					error: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_CINEMA_LIST_INIT:
			return {
				...state,
				cinemaList: {
					data: {},
					fetched: false,
					fetching: false,
					error: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_CINEMA_SCHEDULES_COMPLETED:
			const schedulePayload = action.payload.schedule;

			return {
				...state,
				scheduleList: {
					data: schedulePayload?.daysAndSans,
					fetching: false,
					fetched: true,
					error: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_CINEMA_SCHEDULES_FAILED:
			const { id, errorMessage } = action.payload;

			const foundedScheduleError = currentSchedules.filter((schedule) => schedule.id === id);
			if (!foundedScheduleError.length) {
				currentSchedules.push({
					id: id,
					error: true,
					errorMessage,
				});
			}
			return {
				...state,
				scheduleList: {
					data: currentSchedules,
					fetching: false,
					fetched: false,
					error: true,
					errorMessage,
				},
			};
		case actionTypes.FETCH_CINEMA_SCHEDULES_INIT:
			return {
				...state,
				scheduleList: {
					data: [],
					fetched: false,
					fetching: false,
					error: false,
					errorMessage: "",
				},
			};
		default:
			return state;
	}
}
