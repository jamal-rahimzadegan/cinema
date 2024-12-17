import React, { useContext } from "react";
import { SeatsContext } from "context";
import { SEAT_SIZE } from "./constants";
import { RowNumber, SeatListContainer, SeatRow, EmptySeatSpace } from "./styles";

export default function RenderSeats(): JSX.Element {
	const { seatList, handleSeatClick } = useContext(SeatsContext);

	const shouldShowSeat = (seatStatus: number): boolean => {
		// seats with these statuses [0, 1, 2], could be selected
		return seatStatus !== 3;
	};

	return (
		<div style={{ width: 300, overflow: "scroll" }}>
			<SeatListContainer id="seat-list-container">
				{seatList.map((block, i) => (
					<SeatRow key={block.id}>
						<RowNumber>{block.row_label}</RowNumber>
						{block.seats.map((seat: SeatItem) => {
							return shouldShowSeat(seat.status) ? (
								<SeatItem
									blockId={block.id}
									handleSeatClick={handleSeatClick}
									{...seat}
								/>
							) : (
								<EmptySeatSpace />
							);
						})}
					</SeatRow>
				))}
			</SeatListContainer>
		</div>
	);
}

const SeatItem = (chairProps) => {
	const { x, y, img, blockId, handleSeatClick } = chairProps;

	return (
		<svg
			key={chairProps.id}
			onClick={() => handleSeatClick(chairProps, blockId)}
			width={SEAT_SIZE}
			height={SEAT_SIZE}
			x={x}
			y={y}
		>
			<image width="80%" height="80%" xlinkHref={img} />
		</svg>
	);
};
