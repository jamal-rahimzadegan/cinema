import { createContext, Context } from "react";

interface SeatListContext {
	seatList: SeatsBlock[];
	handleSeatClick: Function;
	selectedSeats: SeatItem[];
	seatCount: number;
	cancelSelection: Function;
}

const SeatsContext: Context<SeatListContext | undefined> = createContext(undefined);

export default SeatsContext;
