import handleResponse from "./handle-response";
import { manageError } from "./handle-error";

export default function interceptResponse(instance) {
	return instance.interceptors.response.use(handleResponse, manageError);
}
