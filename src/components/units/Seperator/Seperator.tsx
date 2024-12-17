import React from "react";
import { StyledHR } from "./style";

type HrProps = {
	height?: string;
	width?: string;
	className?: string;
};

export default function Seperator(props: HrProps): JSX.Element {
	const { height, width, ...restProps } = props;
	return <StyledHR {...restProps} />;
}
