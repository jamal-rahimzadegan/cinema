import { showErrorMessage } from "utils";

export default function checkUserShahkar(payload) {
	const { stage_status_id, shahkar_check } = payload || {};
	const matchNCodeAndPhone =
		"stage_status_id" in payload &&
		stage_status_id !== 5 &&
		"shahkar_check" in payload &&
		shahkar_check === false;

	if (matchNCodeAndPhone) {
		showErrorMessage(" شماره همراه شما با اطلاعات کارت ملی همخوانی ندارد ");
	}
}
