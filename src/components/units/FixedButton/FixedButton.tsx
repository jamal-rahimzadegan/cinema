import React, { MouseEventHandler } from "react";
import "./FixedButton.scss";

interface Props {
	align?: string;
	type?: string;
	isFullWidth?: boolean;
	clicked: MouseEventHandler<HTMLDivElement>;
	children: JSX.Element | JSX.Element[];
}

export default function FixedButton(props: Props) {
	const { isFullWidth, clicked, align, type, children } = props;
	return (
		<div
			onClick={clicked}
			className={`fixed-button fixed-button--${align}-align fixed-button--${type} fixed-button--${
				isFullWidth && "full-width"
			}`}
		>
			{children}
		</div>
	);
}
