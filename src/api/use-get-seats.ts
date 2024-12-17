import { useReactQuery } from "hooks";
import { httpClient } from "services";
import { SeatsPaylaod, SeatsResponse } from "types/models/api/get-seats";
import { SEAT_STATUS } from "../pages/select-seat/constants";
import freeChair from "../assets/icon/seats/chair@3x.png";
import reservedChair from "../assets/icon/seats/chair_black@3x.png";
import soldChair from "../assets/icon/seats/chair_red@3x.png";

interface Params {
	samfaa_schedule_id: string;
	reserve_id: string | null;
}

export default function useGetSeats(params: Params) {
	const fetchSeats = async () => {
		const res = await httpClient.post<SeatsPaylaod, SeatsResponse>("grpc", {
			data: {
				payload: JSON.stringify(params),
				op_code: 1005,
			},
		});

		if (res?.payload?.blocks?.length) {
			sessionStorage.clear();
			return normalizeData(res?.payload?.blocks);
		}
	};

	return useReactQuery<SeatsBlock[]>("FETCH_CINEMA_SEATS", fetchSeats);
}

const normalizeData = (blocks: SeatsBlock[]): SeatsBlock[] => {
	const getImg = (status) => {
		if (status === SEAT_STATUS.free) return freeChair;
		if (status === SEAT_STATUS.reserved) return reservedChair;
		if (status === SEAT_STATUS.booked) return soldChair;
	};

	// we are injecting the image to seats
	blocks.forEach((block) => block.seats.forEach((seat) => (seat.img = getImg(seat.status))));

	return blocks;
};
