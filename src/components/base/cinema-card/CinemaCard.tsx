import React, { useContext, useMemo } from "react";
import { CinemaListContext } from "context";
import { Text, SpriteIcon } from "components";
import RenderDays from "components/base/cinema-card/RenderDays";
import Cinema0 from "assets/img/cinema-0.png";
import RenderSansOfTheDay from "./RenderSansOfTheDay";
import "./CinemaCard.scss";

interface Props {
	cinema: CinemaItem;
	filmId: string;
}

export default function CinemaCard(props: Props) {
	const { filmId } = props;
	const { id, name, address, thumbnail, release_days } = props.cinema || {};

	const {
		setState,
		state,
		state: { selectedDay, selectedCinema },
	} = useContext(CinemaListContext);
	const isCinemaSelected = +selectedCinema?.id === +id;

	const pickedDay: ReleaseDay = useMemo(() => {
		return release_days.find((item: ReleaseDay) => item.persian_date === selectedDay);
	}, [selectedDay]);

	const manageSansPanelVisibility = async () => {
		return setState({
			...state,
			selectedCinema: isCinemaSelected ? null : props.cinema,
			selectedDay: "",
			selectedSans: "",
		});
	};

	return (
		<div className="cinema-card-wrapper" aria-label="مشاهده مشخصات فیلم">
			<div className="flex m-1 p-1">
				<img alt={name} src={thumbnail || Cinema0} className="cinema-card-wrapper__image" />
				<div className="px-2">
					<Text align="right" size="large" color="black">
						{name}
					</Text>
					<Text size="small" isBold align="right" color="dark" className="mt-4">
						{address}
					</Text>
				</div>
			</div>
			<div className="cinema-card-wrapper__sans">
				<div
					onClick={manageSansPanelVisibility}
					className="cinema-card-wrapper__sans__title"
				>
					<Text align="none" color="black">
						مشاهده سانس ها
					</Text>
					<SpriteIcon
						name="sprite"
						align="none"
						iconName={isCinemaSelected ? "drop-up" : "drop-down"}
					/>
				</div>
				<div
					className={`cinema-card-wrapper__sans__extra-data-wrapper
					${!isCinemaSelected && "cinema-card-wrapper__sans__extra-data-wrapper--close"}`}
				>
					{release_days?.length ? (
						<RenderDays
							isCinemaSelected={isCinemaSelected}
							releaseDays={release_days}
							isEmpty={!release_days.length}
						/>
					) : (
						<div className="flex flex-col place-items-center justify-center my-3">
							<Text size="small" color="black">
								هیچ سانسی پیدا نشد
							</Text>
						</div>
					)}
					{pickedDay?.releases?.length ? (
						<RenderSansOfTheDay pickedDay={pickedDay} />
					) : null}
				</div>
			</div>
		</div>
	);
}
