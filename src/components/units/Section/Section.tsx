import React, { ReactNode } from "react";
import "./Section.scss";

interface Props {
	isInline?: boolean;
	type?: string;
	children?: JSX.Element | JSX.Element[];
}

export default function Section(props: Props) {
	const { children, type = "", isInline } = props;
	return (
		<div className={`section ${isInline ? "section--inline" : ""} section--${type}`}>
			{children}
		</div>
	);
}
