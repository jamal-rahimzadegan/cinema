import actionTypes from "../action-types";

const initialState = {
	selectedFilm: {},
	selectedCinema: {},
	ticketForm: {
		seatCount: 1,
		firstName: "",
		lastName: "",
		mobileNumber: "",
	},
	selectedSeats: [],
};

export default function reservationReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_RESERVATION_FILM:
			return {
				...state,
				selectedFilm: action.payload.filmData,
			};
		case actionTypes.INIT_RESERVATION_FILM:
			return {
				...state,
				selectedFilm: {},
			};
		case actionTypes.INIT_RESERVATION_CINEMA:
			return {
				...state,
				selectedCinema: {},
			};
		case actionTypes.PICK_CINEMA_FOR_RESERVE:
			return {
				...state,
				selectedCinema: action.payload.cinemaData,
			};
		case actionTypes.SET_RESERVATION_TICKET_FORM:
			return {
				...state,
				ticketForm: action.payload.ticketFormData,
			};
		case actionTypes.SET_RESERVATION_SELECTED_SEATS:
			return {
				...state,
				selectedSeats: action.payload.selectedSeats,
			};
		default:
			return state;
	}
}
