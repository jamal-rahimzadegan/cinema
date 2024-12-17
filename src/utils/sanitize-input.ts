import { REGEX } from "constant";

export default function sanitizeInput(inputTxt: string): boolean {
	if (REGEX.containsHtml.test(inputTxt)) return false;
	return true;
}
