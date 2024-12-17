import React from "react";
import "./TextButton.scss";

interface Props {
	position?: string;
	clicked: (a: any) => any;
	bold?: boolean;
	fontSize?: string;
	children: JSX.Element | JSX.Element[];
}

export default function TextButton(props: Props) {
	const { clicked, bold = true, fontSize = "medium", position = "center", children } = props;

	return (
		<div className={`button-container button-container--` + position}>
			<div
				onClick={clicked}
				className={`button button--${bold ? "bold" : ""} button--${fontSize}-font`}
			>
				{children}
			</div>
		</div>
	);
}
