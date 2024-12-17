import { ls } from "tools";
import { getQueryParams } from "../utils";
import { isDevelopment } from "../constant";

class AuthService {
	token: string;
	private static instance: AuthService;

	private constructor() {
		this.token = ls.get("aTicketToken");
	}

	public static exposeInstance(): AuthService {
		if (!AuthService.instance) AuthService.instance = new AuthService();
		return AuthService.instance;
	}

	storeToken() {
		const { search } = window.location;
		let token: string = getQueryParams(search)?.token || "";

		if (token) {
			this.token = token;
			return ls.set("aTicketToken", token);
		} else {
			console.error("no token");
			token = process.env.REACT_APP_FAKE_TOKEN;
			// DI - property injection
			this.token = token;
			isDevelopment && ls.set("aTicketToken", token);
		}
	}

	get isLoggedIn(): boolean {
		return !!this.token;
	}

	refreshToken() {}

	login() {}

	logout() {}
}

export default AuthService.exposeInstance();
