import React, { memo, MouseEventHandler } from "react";
import "./SubmitButton.scss";
import { StyledSubmitBtn } from "./styles";

interface Props {
	onClick: MouseEventHandler<HTMLButtonElement>;
	type?: string;
	testId?: string;
	fixed?: boolean;
	bold?: boolean;
	fontSize?: string;
	minWidth?: string;
	marginTop?: string;
	isRadius?: boolean;
	lineHeight?: string;
	zIndexMoreThanActionSheet?: boolean;
	radiusType?: unknown;
	children: any;
	className?: string;
}

function SubmitButton(props: Props) {
	const {
		type = "",
		fixed = false,
		bold = false,
		fontSize = "medium",
		minWidth = "auto",
		marginTop = "0",
		isRadius = false,
		lineHeight = "none",
		zIndexMoreThanActionSheet = false,
		onClick,
		radiusType,
		children,
		testId,
		className,
	} = props;

	const createClasses = () => {
		return `submit-button-container submit-button-container--${type}
                submit-button-container--${fixed ? "fixed" : ""}
                submit-button-container--radius-${radiusType} submit-button-container--${fontSize}-font
                ${isRadius && "submit-button-container--is-radius"}
                ${
					zIndexMoreThanActionSheet &&
					"submit-button-container--zindex-more-than-action-sheet"
				} ${className}
                `;
	};

	return (
		<StyledSubmitBtn
			data-testid={testId}
			aria-label={typeof children === "string" ? children : ""}
			onClick={onClick}
			className={createClasses()}
			style={{
				lineHeight: lineHeight,
				fontWeight: bold ? "bold" : "",
				marginTop: marginTop,
				minWidth: minWidth,
				textAlign: "center",
			}}
		>
			{children}
		</StyledSubmitBtn>
	);
}

export default memo(SubmitButton);
