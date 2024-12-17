import React from "react";
import "./HorizontalScrollingContainer.scss";

interface Props {
	children?: JSX.Element | JSX.Element[];
	testId: string;
}

export default function HorizontalList(props: Props) {
	const { children, testId } = props;

	return (
		<div className="horizontal-list" data-testid={testId}>
			{children}
		</div>
	);
}
