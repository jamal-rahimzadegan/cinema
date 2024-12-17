import { useEffect } from "react";

export default function useRetryApi(err: unknown, cb: Function, delay?: number) {
	const retry = () => {
		if (!err) return;
		setTimeout(cb, delay || 1000);
	};

	useEffect(retry, [err]);
}
