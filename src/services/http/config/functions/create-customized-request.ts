import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import interceptResponse from "../functions/intercept-response";
import authService from "services/auth-service";
import { apiConfig } from "constant/config";
import { ls } from "tools";

export default function createCustomizedRequest(method, api: string, config: AxiosRequestConfig) {
	const { headers, data } = config || {};

	const axiosInstance: AxiosInstance = axios.create({
		method,
		data,
		baseURL: process.env.REACT_APP_BASE_URL,
		url: api,
		timeout: apiConfig.timeout,
		validateStatus: () => true,

		headers: {
			...headers,
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "JWT " + (authService.token || ls.get("aTicketToken")),
		},
	});

	interceptResponse(axiosInstance);

	return axiosInstance[method](api, data || null);
}
