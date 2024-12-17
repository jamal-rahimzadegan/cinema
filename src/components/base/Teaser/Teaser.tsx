import React from "react";
import { useSelector } from "react-redux";
import { shareMovie } from "utils";
import { Text, SpriteIcon } from "../..";
import { RootStateType } from "redux/reducers";
import filmPlaceholder2 from "assets/img/background.png";
import "./Teaser.scss";

interface Props {
	film: FilmItem;
}

export default function Teaser(props: Props) {
	const { film } = props;
	const { platformName } = useSelector((state: RootStateType) => state.meta);

	const shareFilm = () => {
		alert(`your platform is: ${platformName}`);
		shareMovie(film.name, "", film.cover, platformName);
	};

	return (
		<div>
			<div className="teaser">
				<div role="button" aria-label="اشتراک گذاری" className="teaser__placeholder">
					<img src={film.banner || filmPlaceholder2} alt={film.name} />
				</div>
				{/*-----share button-----------------------------------------------------*/}
				{/*{platformName !== "ios" ? (*/}
				{/*	<div className="teaser__share">*/}
				{/*		<SpriteIcon clicked={shareFilm} name="sprite" iconName="share-white" />*/}
				{/*	</div>*/}
				{/*) : null}*/}
				{/*------------------------------------------------------------------*/}
				<div className="teaser__poster">
					<img src={film.cover} alt="کاور فیلم" />
					{/* -----------film information-------------------------- */}
					<div className="teaser__poster__information">
						<Text size="large" align="right" isBold={true}>
							{film.name}
						</Text>
						<div>
							{film.duration ? <DurationInfo duration={film.duration} /> : null}
							{film.genre ? <Text className="mt-1">{film.genre}</Text> : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const DurationInfo = ({ duration }) => (
	<div className="film-time">
		<SpriteIcon name="sprite" iconName="time" align="none" />
		<Text className="mr-2" size="small">
			{duration} دقیقه
		</Text>
	</div>
);
