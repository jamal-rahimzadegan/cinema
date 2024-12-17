import actionTypes from "../redux/action-types";

export default function createAction(type: keyof typeof actionTypes, payload: object = {}) {
	return {
		type: actionTypes[type],
		payload,
	};
}
