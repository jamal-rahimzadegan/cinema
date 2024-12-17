import React from "react";
import { useHistory } from "react-router-dom";
import { httpClient } from "services";
import { Text } from "components";
import "./FilmItem.scss";
import placeHolderImg from "assets/img/movie-placeholder.png";

interface Props {
	data: FilmItem;
}

export default function FilmItem(props: Props) {
	const { data } = props;
	const { name, cover, id: filmID } = data;
	const history = useHistory();

	const handleError = ({ target }) => {
		target.onerror = null;
		target.src = placeHolderImg;
		target.classList = "film-image__img film-image__failed";
	};

	const navigateToDetails = async () => {
		await httpClient.destroyQuery("FETCH_CINEMA_LIST");

		return history.push({
			pathname: "/film/" + filmID,
			state: { film: data },
		});
	};

	return (
		<div data-testid={"film" + filmID} className="film-item" onClick={navigateToDetails}>
			<img onError={handleError} src={cover} alt={name} loading="lazy" />
			<Text isBold numberOfLines={1} className="film-item__title" align="center">
				{name}
			</Text>
		</div>
	);
}
