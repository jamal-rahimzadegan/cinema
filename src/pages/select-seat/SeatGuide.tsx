import React from "react";
import { Text } from "../../components";
import { SEAT_GUIDE_ITEMS } from "./constants";

export default function SeatGuide() {
	return (
		<div className="seat-guide">
			{SEAT_GUIDE_ITEMS.map(({ icon, title }) => (
				<div className="seat-guide__item">
					<img src={icon} alt={title} />
					<Text color="BLACK" size="extraSmall" isBold>
						{title}
					</Text>
				</div>
			))}
		</div>
	);
}
