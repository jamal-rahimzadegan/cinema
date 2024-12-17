import React, { useContext } from "react";
import { List, Text } from "components";
import { CinemaListContext } from "context";
import { DateItem, DateContainer } from "./styles";

interface Props {
	pickedDay: Pick<ReleaseDay, "releases">;
}

export default function RenderSansOfTheDay(props: Props): JSX.Element {
	const { pickedDay } = props;

	const {
		setState,
		state,
		state: { selectedSans },
	} = useContext(CinemaListContext);

	const pickSans = (e, item: ReleaseSans) => {
		e.stopPropagation();
		setState({ ...state, selectedSans: item });
	};

	return (
		<List data={pickedDay.releases} emptyMsg="سانس پیدا نشد" isLoading={false} isEmpty={false}>
			<Text isBold align="center" className="mt-5 mr-2 mb-2" color="black">
				انتخاب سانس
			</Text>
			<DateContainer>
				{pickedDay.releases.map((item: ReleaseSans) => {
					const isSelected = +item.provider_id === +selectedSans.provider_id;
					return (
						<DateItem
							isDayClicked={isSelected}
							key={item.id}
							onClick={(e) => pickSans(e, item)}
						>
							{item.start_at}
						</DateItem>
					);
				})}
			</DateContainer>
		</List>
	);
}
