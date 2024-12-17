// @ts-nocheck
import { makeUuid } from "utils";

interface Payload {
	scheduleList: ReleaseSans[];
	placeId: string;
	showId: string;
}

type DayType = Array<{
	uid: string;
	persianDate: string;
	persianWeekDay: string;
	sans: ReleaseSans[];
}>;

export default function mapCinemaSchedules(payload: Payload) {
	const { scheduleList, showId, placeId } = payload;
	const daysAndSans: DayType = [];

	scheduleList.forEach((schedule) => {
		if (daysAndSans.filter((day) => day.persianDate === schedule.persian_date).length === 0) {
			daysAndSans.push({
				uid: makeUuid(),
				persianDate: schedule.persian_date,
				persianWeekDay: schedule.persian_week_day,
				sans: scheduleList.filter(
					(daySchedule) => daySchedule.persian_date === schedule.persian_date
				),
			});
		}
	});

	return {
		id: placeId + "-" + showId,
		daysAndSans,
		error: false,
		errorMessage: "",
	};
}
