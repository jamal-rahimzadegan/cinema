import axios from "axios";
import { Progress } from "../../types";
import handleProgress from "./helpers/handle-progress";

export default async function downloadFile(url: string, fileName, getProgress: Progress) {
	try {
		const response = await axios({
			url,
			method: "GET",
			responseType: "blob",
			onDownloadProgress: (e) => handleProgress(e, getProgress),
		});

		const link = document.createElement("a");
		link.href = window.URL.createObjectURL(new Blob([response.data]));
		link.setAttribute("download", fileName); //pass with extension file.jpg
		document.body.appendChild(link);
		link.click();
	} catch (e) {}
}
