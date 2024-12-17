import { ApiErr } from "../../types";

function manageError(errPayload: ApiErr, placeOfOccurrence: string): string {
	if (!errPayload) return;

	const { error } = errPayload || {};
	console.error(`---api err in  ${placeOfOccurrence} --->`, error);

	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx

		return this.getErrorMsg("");
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js

		return this.getErrorMsg(error.request?.responseText);
	} else {
		// Something happened in setting up the request that triggered an Error

		return this.getErrorMsg("");
	}
}

function getErrorMsg(err: any): string {
	try {
		err = JSON.parse(err);
		if (!err) throw Error("missing data");
		return err.payload.description;
	} catch (e) {
		return "خطایی رخ داده است";
	}
}

export { manageError, getErrorMsg };
