//@ts-nocheck

import { StyledText } from "./style";

interface TextProps {
	size?: keyof FontSize;
	color?: keyof Colors | string; // TODO: fix this;
	bgColor?: keyof Colors | string; // TODO: fix this
	className?: string;
	testId?: string;
	onClick?: Function;
	weight?: string;
	children?: any;
	align?: string;
	numberOfLines?: number;
	role?: string;
	dangerouslySetInnerHTML?: any;
	hasUnderline?: boolean;
	isBold?: boolean;
	isPerDigit?: boolean;
	width?: string;
	type?: "p" | "h1" | "span";
}

export default function Txt(props: TextProps): JSX.Element {
	const { testId, type = "p", weight, children, onClick, align, ...restProps } = props;

	return (
		<StyledText
			data-testid={testId || children}
			align={align}
			as={type}
			onClick={() => onClick?.()}
			children={children}
			{...restProps}
		/>
	);
}
