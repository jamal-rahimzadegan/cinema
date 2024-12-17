import { AxiosError } from "axios";
import { apiConfig } from "constant/config";
import { Dispatch, SetStateAction } from "react";

type ApiUrl = keyof typeof apiConfig.url;

interface ApiErr {
	status: number;
	message: string;
	error: AxiosError;
}

type Progress = Dispatch<SetStateAction<number>>;

type UploadMethod = "formData" | "base64";

export { ApiUrl, ApiErr, Progress, UploadMethod };
