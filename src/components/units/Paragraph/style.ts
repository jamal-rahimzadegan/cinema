//@ts-nocheck
import styled, { css } from "styled-components";

export const StyledText = styled.p`
	font-weight: ${({ isBold }) => (isBold ? "bolder" : "unset")};
	width: ${({ width }) => width ?? "unset"};
	text-align: ${(props) => props.align};
	color: ${({ theme, color }) => theme.colors[color || "PRIMARY_TEXT"]};
	background: ${({ theme, bgColor }) => theme.colors[bgColor || "TRANSPARENT"]};
	text-decoration: ${({ hasUnderLine }) => (hasUnderLine ? "underline" : "unset")};
	font-size: ${({ size, theme }) => theme.fontSize[size]};

	${(props) =>
		props.numberOfLines
			? css`
					display: block;
					display: -webkit-box;
					-webkit-line-clamp: ${props.numberOfLines};
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-box-orient: vertical;
			  `
			: ""};
`;
