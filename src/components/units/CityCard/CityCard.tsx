import React from "react";
import "./CityCard.scss";
import { Text, SpriteIcon, Seperator } from "../../";

interface Props {
	cityId?: string;
	cityName?: string;
	onSelect?: Function;
}

export default function CityCard(props: Props) {
	const { onSelect, cityId, cityName } = props;

	return (
		<>
			<div className="flex py-2" onClick={() => onSelect({ name: cityName, cityId })}>
				<SpriteIcon className="ml-2" name="sprite" align="none" iconName="big-marker" />
				<Text align="right">{cityName}</Text>
			</div>
			<Seperator />
		</>
	);
}
