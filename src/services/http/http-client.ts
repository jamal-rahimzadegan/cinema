import { AxiosRequestConfig, Method } from "axios";
import { reactQueryClient } from "constant";
import { METHODS } from "./config/constant";
import { apiConfig } from "constant/config";
import actionTypes from "redux/action-types";
import downloadFile from "./config/functions/download-file";
import { manageError } from "./config/functions/handle-error";
import { ApiErr, ApiUrl, Progress, UploadMethod } from "./types";
import createSimpleRequest from "./config/functions/create-simple-request";
import { uploadByFormData, uploadByBase64 } from "./config/functions/upload-file";
import createCustomizedRequest from "./config/functions/create-customized-request";

class HttpClient {
	post: <D, R>(api: ApiUrl, config?: Omit<AxiosRequestConfig, "data"> & D) => Promise<R>;
	get: <R>(api: ApiUrl, config?: Omit<AxiosRequestConfig, "data">) => Promise<R>;

	constructor() {
		METHODS.forEach((method) => (this[method] = this.createAdvancedRequest.bind(this, method)));
	}

	protected createAdvancedRequest(method: Method, api: ApiUrl, config: AxiosRequestConfig) {
		return createCustomizedRequest(method, apiConfig.url[api], config);
	}

	plain(config: AxiosRequestConfig) {
		return createSimpleRequest(config);
	}

	async download(url: string, fileName: string, getProgress: Progress) {
		await downloadFile(url, fileName, getProgress);
	}

	async upload(url: string, file: Blob, getProgress: Progress, type: UploadMethod) {
		type === "formData" && (await uploadByFormData(url, file, getProgress));
		type === "base64" && (await uploadByBase64(url, file, getProgress));
	}

	async destroyQuery(queryKey: keyof typeof actionTypes, shouldRemove: boolean = true) {
		await reactQueryClient.invalidateQueries(queryKey);
		shouldRemove && reactQueryClient.removeQueries(queryKey);
	}

	handleError(err: unknown, placeOfOccurrence: string): string {
		return manageError(err as ApiErr, placeOfOccurrence);
	}
}

export default new HttpClient();
