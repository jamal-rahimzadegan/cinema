import { parseToken } from "utils";
import { ls } from "tools";

export default function getDefaultMobileNumber() {
	const parsedToken: any = parseToken(ls.get("aTicketToken"));
	if (parsedToken?.user_name) return parsedToken.user_name;
	if (parsedToken?.mobile_no) return parsedToken.mobile_no;
	return "";
}
