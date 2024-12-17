import { REGEX } from "constant";

export default function convertToEng(value: string) {
	return value
		? value.replace(REGEX.persianDigits, (char) => "0123456789"[char.charCodeAt(0) & 0xf])
		: value;
}
