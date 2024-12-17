import React, { AriaRole, MouseEventHandler } from "react";
import "./sprite-icon.scss";

interface Props {
	onClick?: MouseEventHandler<HTMLDivElement>;
	marginTop?: string;
	rotate?: number;
	name?: string;
	iconName?: string;
	align?: "right" | "left" | "center" | "none";
	className?: string;
	role?: AriaRole;
	ariaLabel?: string;
}

export default function SpriteIcon(props: Props) {
	const { onClick, className = "", align, rotate, name, iconName, role, ariaLabel } = props;

	return (
		<i
			aria-label={ariaLabel}
			role={role}
			onClick={onClick}
			style={{ transform: `rotate(${rotate}deg)` }}
			className={`${name} ${name}--${iconName} sprite--${align}-align ${className}`}
		/>
	);
}
