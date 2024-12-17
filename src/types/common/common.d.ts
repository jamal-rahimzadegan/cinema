type ParsedToken = {
	account_id: number;
	app_id: number;
	exp: number;
	host_id: number;
	jit: string;
	mobile_no: string;
} | null;

type ComplexObject<T> = Record<T, any>;

type NestedObject = Record<string, any>;

type PlatformType = "ios" | "android" | "pwa";

type CityType = { name: string; cityId: string };

type FnType = Function | ((a?: any, b?: any, c?: any) => any);

type ReactChildren = React.ReactNode | Element | Element[];

type ReversedString<S extends String> = S extends `${infer Char}${infer Tail}`
	? `${Reverse<Tail>}${Char}`
	: S;
