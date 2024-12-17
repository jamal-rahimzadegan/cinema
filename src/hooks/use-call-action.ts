import { useCallback } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/action-types";

export default function useCallAction() {
	const dispatch = useDispatch();

	return useCallback(
		(type: keyof typeof actionTypes, payload?: ComplexObject<string>) => {
			return dispatch({ type: actionTypes[type], payload });
		},
		[dispatch]
	);
}
