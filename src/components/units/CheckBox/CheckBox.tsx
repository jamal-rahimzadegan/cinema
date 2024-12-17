import React, { MouseEventHandler } from "react";
import "./CheckBox.scss";

interface Props {
	marginTop?: string;
	hasRadius?: boolean;
	isChecked?: boolean;
	toggleChecked?: MouseEventHandler<HTMLDivElement>;
}

export default function CheckBox(props: Props) {
	const { isChecked, toggleChecked, marginTop = "0", hasRadius } = props;

	return (
		<div
			role="checkbox"
			aria-checked={isChecked}
			className="checkbox-container"
			onClick={toggleChecked}
			style={{
				marginTop,
				borderRadius: hasRadius ? "100%" : "none",
				borderColor: hasRadius && isChecked ? "#0f9400" : "grey",
			}}
		>
			{isChecked ? (
				hasRadius ? (
					<div className="checkbox-container__checked" />
				) : (
					<span>&#x2713;</span>
				)
			) : null}
		</div>
	);
}
