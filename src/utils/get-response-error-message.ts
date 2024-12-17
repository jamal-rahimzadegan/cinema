import { apiConfig } from "constant/config";

export default function getResponseErrorMessage(error) {
	if (error.response === undefined || error.code === "ECONNABORTED") {
		return apiConfig.errorMessages.access;
	}
	if (error.response && error.response.status && error.response.status !== 403) {
		return error.response.data.statusMessage;
	} else if (error.response && error.response.status) {
		return apiConfig.errorMessages.authorization;
	}
}
