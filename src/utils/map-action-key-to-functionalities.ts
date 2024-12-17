export default function mapActionKeyToFunctionalities(actionKey) {
	switch (actionKey) {
		case "lost-card":
			return {
				stateName: "lostCard",
				stateVariable: "lostCardData",
				nextUrl: "/lost-card/result",
				actionDispatchName: "LOST_CARD",
				submitInputText: "اعلام مفقودی کارت",
			};
		case "invoice-list":
			return {
				stateName: "accountTurnover",
				stateVariable: "accountTurnoverData",
				nextUrl: "/account-turnover/result",
				actionDispatchName: "FETCH_ACCOUNT_TURNOVER",
				submitInputText: "دریافت صورتحساب",
			};
		case "account-balance":
			return {
				stateName: "accountBalance",
				stateVariable: "accountBalanceData",
				nextUrl: "/account-balance/result",
				actionDispatchName: "FETCH_ACCOUNT_BALANCE",
				submitInputText: "دریافت مانده حساب",
			};
		default:
			return {
				stateName: "",
				stateVariable: "",
				nextUrl: "",
				actionDispatchName: "",
			};
	}
}
