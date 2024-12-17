import axios from "axios";
import { Progress } from "../../types";
import handleProgress from "./helpers/handle-progress";

type Payload = [url: string, file: Blob, getProgress: Progress];

// formData
async function uploadByFormData(...payload: Payload) {
	try {
		const [url, file, getProgress] = payload;

		const formData = new FormData();
		formData.append("file", file);

		const res = await axios.post(url, formData, {
			withCredentials: false,
			onUploadProgress: (e) => handleProgress(e, getProgress),
		});
		console.log(res);
	} catch (err) {
		console.error(`---error in  upload --->`, err);
	}
}

// base64
async function uploadByBase64(...payload: Payload) {
	try {
		const [url, file, getProgress] = payload;

		const fileAsBase64 = await (() => {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve(reader.result);
				reader.onerror = (error) => {
					console.error(`--- err in convert to base64 ----> `, error);
					reject(error);
				};
			});
		})();

		const res = await axios.post(url, fileAsBase64, {
			onUploadProgress: (e) => handleProgress(e, getProgress),
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log(`--- res ----> `, res);
	} catch (err) {
		console.error(`---error in  upload --->`, err);
	}
}

export { uploadByFormData, uploadByBase64 };
