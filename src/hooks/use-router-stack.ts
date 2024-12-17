import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useCallAction } from "hooks";

export default function useRouterStack() {
	const callAction = useCallAction();
	const location = useLocation();
	const firstTime = useRef(true);

	const pushRoute = (routeName) => callAction("PUSH_ROUTE_STACK", { routeName });

	useEffect(() => {
		if (firstTime.current) {
			pushRoute(location?.pathname);
			firstTime.current = false;
		}
	}, [pushRoute, location]);
}
