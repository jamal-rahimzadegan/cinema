import React from "react";
import "./WhiteSpace.scss";

interface Props {
	width?: number | string;
	space?: number;
}

export default function WhiteSpace(props: Props) {
	const { space = 10, width = "auto" } = props;
	return (
		<div
			className="white-space"
			style={{
				width,
				height: space.toString() + "px",
			}}
		/>
	);
}
