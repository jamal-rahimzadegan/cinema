interface CinemaItem {
	id: number;
	name: string;
	address: string;
	thumbnail: string;
	selectedSans?: ReleaseSans;
	release_days: ReleaseDay[];
}

interface ReleaseDay {
	id: number;
	persian_date?: string;
	persian_week_day?: string;
	releases?: ReleaseSans[];
}

// Release is same as sans
interface ReleaseSans {
	id: number;
	release_day_id: number; // parent id
	provider_id: number;
	price: number;
	start_at: string;
	end_at: string;
}

interface SeatsBlock {
	id: string;
	row_label: string;
	seats: SeatItem[];
}

interface SeatItem {
	id: string;
	x: number;
	y: number;
	type: string;
	row: number;
	number: number;
	reserved: boolean;
	img: string;
	status: 0 | 1 | 2 | 3;
}
