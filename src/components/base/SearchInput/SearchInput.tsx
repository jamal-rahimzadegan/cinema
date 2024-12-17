import React from "react";
import { SpriteIcon } from "../../index";
import "./SearchInput.scss";

interface Props {
	placeholder: string;
}

export default function SearchInput(props: Props) {
	const { placeholder } = props;
	return (
		<div className="search-input">
			<input aria-label={placeholder} placeholder={placeholder} />
			<SpriteIcon role="button" name="sprite" iconName="search" />
		</div>
	);
}
