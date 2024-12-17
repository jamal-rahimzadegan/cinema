import { REGEX } from "constant";

export default function validateString(str: string, pattern: keyof typeof REGEX) {
	return REGEX[pattern].test(str);
}
