import React from "react";
import "./MessageCard.scss";
import { WhiteSpace } from "../../index";

interface Props {
	isSolid?: boolean;
	type?: string;
	clicked?: (a: any) => any;
	children?: JSX.Element | JSX.Element[];
	testId?: string;
	className?: string;
}

export default function MessageCard(props: Props) {
	const { isSolid = false, type = "primary", clicked, children, testId, className = "" } = props;
	return (
		<div
			data-testid={testId}
			onClick={clicked}
			className={`message-card-wrapper message-card-wrapper--${type} ${className}`}
		>
			{!isSolid && <WhiteSpace />}
			{children}
			{!isSolid && <WhiteSpace />}
		</div>
	);
}
