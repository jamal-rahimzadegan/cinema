import { QueryFunction, useQuery, UseQueryResult, UseQueryOptions } from "react-query";
import actionTypes from "redux/action-types";

type QueryPayload<R> = [
	queryKey: keyof typeof actionTypes,
	fetchData: QueryFunction<any>,
	options?: UseQueryOptions<R>
];

// R stands for the response type
export default function useReactQuery<R>(...payload: QueryPayload<R>): UseQueryResult<R, Error> {
	const [queryKey, fetchData, options] = payload;

	return useQuery<R, Error>(queryKey, fetchData, {
		staleTime: 1_000, // cache time
		retry: false,
		...options,
	});
}
