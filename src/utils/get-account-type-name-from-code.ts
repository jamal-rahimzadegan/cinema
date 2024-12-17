export default function getAccountTypeNameFromCode(accountTypeCode) {
	switch (accountTypeCode) {
		case "010":
			return "جاری";
		case "030":
			return "کوتاه مدت";
		case "040":
			return "قرض الحسنه";
		default:
			return "نا شناس";
	}
}
