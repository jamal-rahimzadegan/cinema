interface CinemaState {
	selectedCinema: CinemaItem | null;
	selectedDay: string;
	selectedSans: ReleaseSans | null;
	searchNameInput: string;
	searchCinemaResults: CinemaItem[];
}

type SharedItemsType = {
	state: CinemaState;
	setState: Function;
};

export type { CinemaState, SharedItemsType };
