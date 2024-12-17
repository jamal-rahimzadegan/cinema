import { putSeparator } from "utils";
import { TicketTableData } from "types/models/ticket-confirm-form";
import { FilmItem } from "../components";

interface DataTableType {
	selectedFilm: FilmItem;
	selectedCinema: CinemaItem & { date: string };
}

export default function handleTicketDataTable(data: DataTableType): TicketTableData {
	const { name: cinemaName, selectedSans } = data.selectedCinema;
	const { name } = data?.selectedFilm || {};

	return [
		{
			name: "فیلم:",
			iconName: "movie",
			value: name,
		},
		{
			name: "سینما:",
			iconName: "cinema",
			value: cinemaName,
		},
		{
			name: "تاریخ:",
			iconName: "date",
			value: `${data.selectedCinema?.date || ""} `,
		},
		{
			name: "سانس:",
			iconName: "time",
			value: selectedSans?.start_at,
		},
		{
			name: "قیمت هر بلیت:",
			iconName: "price",
			value: selectedSans?.price ? `${putSeparator(selectedSans?.price)} ریال` : "",
		},
	];
}
