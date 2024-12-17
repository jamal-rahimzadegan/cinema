import Reserved from "../../assets/icon/seats/chair_black.png";
import Selected from "../../assets/icon/seats/chair_green.png";
import Reservable from "../../assets/icon/seats/chair.png";
import Disabled from "../../assets/icon/seats/chair_red.png";

const SEAT_SIZE = 30;

const SEAT_STATUS = {
	free: 0,
	reserved: 1,
	booked: 2, // Covid-19
	notSeat: 3, // Corridor
};

const SEAT_GUIDE_ITEMS = [
	{ title: "رزرو شده", icon: Reserved },
	{ title: "انتخاب شده", icon: Selected },
	{ title: "قابل خرید", icon: Reservable },
	{ title: "غیر قابل رزرو", icon: Disabled },
];

export { SEAT_SIZE, SEAT_STATUS, SEAT_GUIDE_ITEMS };
