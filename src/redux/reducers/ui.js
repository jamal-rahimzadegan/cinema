import { ls } from "tools";
import actionTypes from "../action-types";

const initialState = {
	theme: "dark",
	// theme: ls.get("theme") || "dark",
	routeStack: [],
	stepbarPosition: 0,
	reserveTime: new Date().getTime(),
};

export default function uiReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.PUSH_ROUTE_STACK:
			const myArray = [...state.routeStack];
			const currentPath = action.routeName;

			if (myArray.length === 0) {
				myArray.push(currentPath);
				return {
					...state,
					routeStack: myArray,
				};
			}
			if (myArray.length === 1) {
				const onlyPath = myArray[myArray.length - 1];
				if (onlyPath === currentPath) {
					return state;
				}
				myArray.push(currentPath);
				return {
					...state,
					routeStack: myArray,
				};
			}
			const lastPath = myArray[myArray.length - 1];
			const minusOneLastPath = myArray[myArray.length - 2];
			if (lastPath === currentPath) return state;
			if (minusOneLastPath === currentPath) {
				// the back sithuation
				myArray.pop();
				return {
					...state,
					routeStack: [...myArray],
				};
			}
			myArray.push(currentPath);
			return {
				...state,
				routeStack: myArray,
			};
		case actionTypes.SET_STEP_BAR_POSITION:
			return {
				...state,
				stepbarPosition: action.payload.stepbarPosition,
			};
		case actionTypes.SET_PAYMENT_TIME:
			return {
				...state,
				reserveTime: new Date().getTime(),
			};
		case actionTypes.UPDATE_THEME:
			const newTheme = action.payload.theme;
			ls.set("theme", newTheme);
			return {
				...state,
				theme: newTheme,
			};
		default:
			return state;
	}
}
