import { Progress } from "../../../types";

export default function handleProgress(e, getProgress: Progress) {
	const progress = Math.floor((e.loaded / e.total) * 100);
	getProgress(progress);
}
