import { useHistory } from "react-router-dom";
import { ROUTE_SET } from "constant";

type Push = [
	route: keyof typeof ROUTE_SET,
	params?: Record<string, any>,
	state?: Record<string, any>
]; // TODO: typeof param

type Replace = [route: keyof typeof ROUTE_SET, state?: Record<string, any>];

// TODO: maintain it
export interface Navigate {
	push: (...payload: Push) => Function;
	goBack: Function;
	replace: (...payload: Replace) => Function;
	// block: (cb: Function) => void;
	// unBlock: (cb: Function) => void;
}

export default function useNavigation(): Navigate {
	const history = useHistory();

	const push = (...payload) => {
		const [route, params, state] = payload;

		if (!route) return;

		return history.push({
			pathname: route,
			...(state && state),
			...(params?.id && { params: new URLSearchParams(params).toString() }),
		});
	};

	const replace = ([route, state]) => history.replace(route, ...(state && state));

	// TODO: Implement these later
	const block = (cb) => cb;
	const unBlock = (tx) => {};

	return {
		push,
		goBack: history.goBack,
		replace: history.replace,
		// block,
		// unBlock,
	};
}
