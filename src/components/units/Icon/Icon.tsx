import React from "react";
import "./Icon.scss";

interface Props {
	marginTop?: string;
	marginRight?: string;
	iconName?: string;
}

export default function Icon(props: Props) {
	const { marginTop, marginRight, iconName, ...rest } = props;
	return (
		<div
			role="img"
			className={`icon icon--${iconName}`}
			style={{
				marginTop: marginTop,
				marginRight: marginRight,
			}}
			{...rest}
		/>
	);
}
