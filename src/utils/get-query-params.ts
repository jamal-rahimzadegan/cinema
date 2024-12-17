export default function getQueryParams(search: string): NestedObject {
	if (!search) return {};
	let queries = {};
	new URLSearchParams(search).forEach((value: string, key: string) => (queries[key] = value));
	return queries;
}
