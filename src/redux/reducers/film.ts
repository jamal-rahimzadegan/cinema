import actionTypes from "../action-types";

const initialState = {
	categorizedFilms: {
		data: {},
		fetching: false,
		fetched: false,
		error: false,
		errorMessage: "",
	},
	filmList: {
		data: {
			showList: [],
		},
		fetching: false,
		fetched: false,
		error: false,
		errorMessage: "",
	},
};

export default function filmReducer(state = initialState, action) {
	const currentFilms = { ...state.filmList.data };
	switch (action.type) {
		case actionTypes.FETCH_CATEGORIZED_FILMS_STARTED:
			return {
				...state,
				categorizedFilms: {
					data: {},
					fetching: true,
					fetched: false,
					error: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_CATEGORIZED_FILMS_FAILED:
			return {
				...state,
				categorizedFilms: {
					data: {},
					fetching: false,
					fetched: false,
					error: true,
					errorMessage: action.errorMessage,
				},
			};
		case actionTypes.FETCH_CATEGORIZED_FILMS_COMPLETED:
			return {
				...state,
				categorizedFilms: {
					data: action.payload.categorizedFilms,
					fetching: false,
					fetched: true,
					error: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_FILM_LIST_STARTED:
			return {
				...state,
				filmList: {
					data: currentFilms,
					fetching: true,
					fetched: false,
					error: false,
					errorMessage: "",
				},
			};
		case actionTypes.FETCH_FILM_LIST_FAILED:
			return {
				...state,
				filmList: {
					data: currentFilms,
					fetching: false,
					fetched: false,
					error: true,
					errorMessage: action.errorMessage,
				},
			};
		case actionTypes.FETCH_FILM_LIST_COMPLETED:
			return {
				...state,
				filmList: {
					data: action.payload.filmList,
					fetching: false,
					fetched: true,
					error: false,
					errorMessage: "",
				},
			};
		default:
			return state;
	}
}
