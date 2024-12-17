import { ls } from "tools";
import { apiConfig } from "constant/config";

export default function getUserCityData(newCity?: CityType): CityType {
	if (newCity?.name) {
		ls.set("aTicketUserCity", newCity);
		return newCity;
	} else {
		return ls.get("aTicketUserCity") || apiConfig.defaultCity;
	}
}
