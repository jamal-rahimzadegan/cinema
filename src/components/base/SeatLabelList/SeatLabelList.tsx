import React from "react";
import "./SeatLabelList.scss";

interface Props {
	seats: string[];
}

export default function SeatLabelList(props: Props) {
	const { seats } = props;

	return (
		<div className="seat-labels-list-wrapper">
			{seats.map((seatID) => (
				<div className="seat-labels-list-wrapper__item-wrapper" key={seatID}>
					<div className="seat-labels-list-wrapper__item-wrapper__item">{seatID}</div>
				</div>
			))}
		</div>
	);
}
