import { validateString } from "../../../utils";

describe("validate string", () => {
	it("works with correct input", () => {
		const validatedText = validateString("تست", "perChar");
		expect(validatedText).toBe(true);
	});

	it("works with wrong input", () => {
		const validatedText = validateString(null, "perChar");
		expect(validatedText).toBe(false);
	});
});
