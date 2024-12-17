export default function getStatus(status) {
	switch (status) {
		case 0:
			return "نامشخص";
		case 1:
			return "تایید شده";
		case 2:
			return "فعال";
		case 3:
			return "رد شده";
		case 4:
			return "لغو شده";
		case 5:
			return "پایان یافته";
		default:
			return "";
	}
}
