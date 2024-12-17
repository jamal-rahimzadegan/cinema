//@ts-nocheck
import React from "react";
import { StyledDiv } from "./style";
import theme from "assets/theme";

export type CardType = {
	onClick?: Function;
	bgColor?: keyof typeof theme;
	className?: string;
	children?: React.ReactNode;
	height?: string;
	width?: string;
	borderColor?: string;
	hasBorder?: boolean;
	disabled?: boolean;
	id?: string;
};

export default function Card(props: CardType): any {
	return <StyledDiv {...props} />;
}
