import { useState } from "react";
import { REGEX } from "../constant";
import { validateString } from "utils";

// validation sample
/**
 {
  maxLength:10,
 }

 */

export default function useForm(initialValues, callback) {
	const [inputs, setInputs] = useState(initialValues);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		callback();
	};

	const handleInputChange = (name, value, validation = {}) => {
		let error = false;

		Object.keys(validation).forEach((key) => {
			if (key === "maxLength" && value.length > validation[key]) error = true;
			if (key === "type") {
				if (validation[key] === "number" && !validateString(value, "onlyNumberRegx")) {
					error = true;
				}
				if (
					validation[key] === "alphabet" &&
					!REGEX.perChar.test(value) &&
					!REGEX.onlyEnglishAlphabetRegx.test(value) &&
					!!value
				) {
					console.log(value);
					error = true;
				}
			}
		});

		if (!error) setInputs((inputs) => ({ ...inputs, [name]: value }));
	};

	const handleInputClear = (name) => {
		setInputs((inputs) => ({ ...inputs, [name]: "" }));
	};

	return [inputs, handleInputChange, handleInputClear, handleSubmit];
}
