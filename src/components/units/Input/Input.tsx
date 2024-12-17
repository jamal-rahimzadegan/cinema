//@ts-nocheck
import React, { InputHTMLAttributes, ReactNode } from "react";
import { InputContainer, StyledInput, StyledTextArea } from "./style";
import { sanitizeInput } from "../../../utils";

interface InputProps extends InputHTMLAttributes<any> {
	testId?: string;
	name?: string;
	width?: string;
	height?: string;
	defaultValue?: string | number;
	disabled?: boolean;
	value?: string;
	Icon?: any;
	onEnterPress?: Function;
	onChange?: Function;
	className?: string;
	placeholder?: string;
	maxLength?: string;
	label?: string;
	contentClassName?: string;
	multiLine?: boolean;
	rows?: number;
	cols?: number;
	id?: string;
	ref?: (input: HTMLInputElement | null) => void;
	clearValue?: Function;
}

export default function Input(props: InputProps): JSX.Element {
	const {
		testId,
		ref,
		id,
		Icon,
		height,
		width,
		onEnterPress,
		className,
		wrapperClassName = "",
		label = "",
		multiLine = false,
		labelColor,
		contentClassName,
		placeholder,
		rows = 4,
		cols = 40,
		disabled,
		value,
		onChange,
		...restProps
	} = props;

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			onEnterPress?.();
		}
	};

	const handleOnChange = (e) => sanitizeInput(e.target.value) && onChange?.(e);

	return (
		<InputContainer
			data-testid={testId}
			disabled={disabled}
			height={height}
			width={width}
			className={"rounded " + className}
		>
			{multiLine ? (
				<StyledTextArea
					data-testid={testId}
					placeholder={placeholder}
					onKeyDown={handleKeyPress}
					className={contentClassName}
					rows={rows}
					onChange={handleOnChange}
					cols={cols}
					id={id}
					value={value}
					{...restProps}
				/>
			) : (
				<>
					{Icon ? (
						<div className="mx-1">
							<Icon />
						</div>
					) : null}
					<StyledInput
						id={id}
						data-testid={testId}
						ref={ref}
						placeholder={placeholder}
						className={contentClassName}
						onChange={handleOnChange}
						value={value}
						onKeyDown={handleKeyPress}
						{...restProps}
					/>
				</>
			)}
		</InputContainer>
	);
}
