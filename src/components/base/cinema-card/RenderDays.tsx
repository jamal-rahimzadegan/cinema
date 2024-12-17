import React, { useContext, useId } from "react";
import { List, Text } from "components";
import { CinemaListContext } from "context";
import { DateContainer, DateItem } from "./styles";

interface Props {
	releaseDays: any[];
	// releaseDays: Pick<CinemaItem, "release_days">;
	isEmpty: boolean;
	isCinemaSelected: boolean;
}

export default function RenderDays(props: Props): JSX.Element {
	const { releaseDays = [], isEmpty, isCinemaSelected } = props;
	const elementKey = useId();
	const {
		setState,
		state,
		state: { selectedDay },
	} = useContext(CinemaListContext);

	const selectDay = async (e, dayID) => {
		e.stopPropagation();
		setState({ ...state, selectedDay: dayID, selectedSans: "" });
	};

	return (
		<List
			data={releaseDays as any[]}
			isLoading={false}
			isEmpty={isEmpty}
			emptyMsg="سانس فعالی برای سینما یافت نشد"
		>
			<DateContainer isCinemaSelected={isCinemaSelected}>
				{(releaseDays as any[]).map((item: ReleaseDay, i) => {
					const { persian_date, persian_week_day } = item;
					const isDayClicked = selectedDay === persian_date;

					return (
						<DateItem
							isDayClicked={isDayClicked}
							key={elementKey + i}
							onClick={(e) => selectDay(e, persian_date)}
						>
							<Text color={isDayClicked ? "red" : "black"}>{persian_week_day}</Text>
							<Text size={"small"} color={isDayClicked ? "red" : "black"}>
								{persian_date}
							</Text>
						</DateItem>
					);
				})}
			</DateContainer>
		</List>
	);
}
