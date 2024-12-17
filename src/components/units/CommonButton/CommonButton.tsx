import React, { MouseEventHandler } from "react";
import "./CommonButton.scss";

interface Props {
	icon?: string;
	clicked: MouseEventHandler<HTMLDivElement>;
	children: JSX.Element | JSX.Element[];
}

export default function CommonButton(props: Props) {
	const { clicked, icon, children } = props;

	return (
		<div className="common-button" onClick={clicked}>
			{icon ? (
				<div className="common-button__icon">
					{/*<SpriteIcon marginTop="8px" iconName={icon} />*/}
				</div>
			) : (
				""
			)}
			<div className="common-button__text"> {children} </div>
		</div>
	);
}
