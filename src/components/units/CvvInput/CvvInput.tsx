import React, { MouseEventHandler } from "react";
import InputMask from "react-input-mask";
import { REGEX } from "constant";
import "./CvvInput.scss";

interface Props {
	layoutStyle?: string;
	placeholder?: string;
	value?: string;
	image?: string;
	searchFocus?: string;
	removeBadge?: string;
	maxLength?: number;
	pattern?: string;
	name?: string;
	onChange?: Function;
	onClick?: MouseEventHandler<HTMLInputElement>;
	onFocus?: MouseEventHandler<HTMLInputElement>;
	onBlur?: MouseEventHandler<HTMLInputElement>;
	removeText?: MouseEventHandler<HTMLButtonElement>;
	removeRight: number;
	type?: string;
	title?: string;
	label?: string;
	fixed?: string;
	searchIcon?: string;
	mask?: unknown;
	children?: JSX.Element | JSX.Element[];
	disabled?: boolean;
	readOnly?: boolean;
	autoFocus?: boolean;
	style?: ComplexObject<string>;
}

export default function CvvInput(props: Props) {
	const {
		label,
		mask,
		fixed,
		title,
		children,
		onBlur,
		style,
		onFocus,
		autoFocus,
		readOnly,
		disabled,
		type,
		onChange,
		onClick,
		pattern,
		maxLength,
		name,
		placeholder,
		searchFocus,
		layoutStyle,
		removeBadge,
		image,
		removeText,
		removeRight,
		value,
		searchIcon,
	} = props;

	const Englize = (value) =>
		value
			? String(value).replace(
					REGEX.persianDigits,
					(char) => "0123456789"[char.charCodeAt(0) & 0xf]
			  )
			: value;

	const beforeMaskedValueChange = (newState, oldState, userInput, option) => {
		const { value } = newState;
		const selection = newState.selection;
		option.formatChars["9"] = "[0-9۰-۹٠-٩]";
		return {
			value,
			selection,
		};
	};

	return (
		<div
			className={`cvv-input__container group group--${layoutStyle} group-searchFocus__${searchFocus} group--${fixed}`}
		>
			{layoutStyle === "search" && fixed === "fixed" && (
				<div className="group--search__whitespace" />
			)}
			{title && (
				<label htmlFor={name} className="label">
					&nbsp;{title}
				</label>
			)}
			{children}
			{label && <span className="cvv-input__label">{label}</span>}
			{type !== "password" && (
				<InputMask
					aria-label={placeholder}
					mask={mask}
					maskChar={null}
					className={`input--small-font input ${
						layoutStyle === "bold-inactive" && "input--bold-inactive"
					} ${type === "tel" && "input-ltr"}`}
					id={name}
					name={name}
					type={type}
					autoComplete="off"
					value={value}
					onClick={onClick}
					onChange={(e) => {
						const { value } = e.target;
						e.target.value = Englize(value);
						onChange(e);
					}}
					onFocus={onFocus}
					style={style}
					onBlur={onBlur}
					//ref={inputEl}
					placeholder={layoutStyle === "search" ? "" : placeholder}
					autoFocus={autoFocus}
					maxLength={maxLength}
					disabled={disabled}
					// dir={direction ? direction : 'auto'}
					readOnly={readOnly}
					beforeMaskedValueChange={beforeMaskedValueChange}
				/>
			)}

			{type === "password" && (
				<input
					aria-label={placeholder}
					// mask={mask}
					// maskChar={null}
					className={`input--small-font input ${
						layoutStyle === "bold-inactive" && "input--bold-inactive"
					}`}
					autoComplete="off"
					value={value}
					type={"password"}
					// onFocus = {onFocus}
					// style={style}

					// onBlur = {onBlur}
					// ref={inputEl}

					// disabled={disabled}
					// readOnly
					style={{ letterSpacing: "1px" }}
					// beforeMaskedValueChange = {beforeMaskedValueChange}
				/>
			)}
			{type === "password" && (
				<input
					// onClick={onButtonClick}
					id={name}
					name={name}
					autoComplete="off"
					pattern={pattern}
					onClick={onClick}
					// readOnly
					onChange={(e) => {
						const { value } = e.target;
						e.target.value = Englize(value);
						onChange(e);
					}}
					maxLength={maxLength}
					className={`input--small-font input ${
						layoutStyle === "bold-inactive" && "input--bold-inactive"
					}`}
					placeholder={placeholder}
					value={value}
					type={"tel"}
					style={{
						width: "calc(100% - 110px)",
						backgroundColor: "transparent",
						letterSpacing: "1px",
						color: "transparent",
						caretColor: "rgba(239, 74, 35, 1)",
						height: "100%",
						position: "absolute",
						top: 0,
						left: 0,
						border: "none",
					}}
				/>
			)}

			{removeText && value && (
				<button
					onClick={removeText}
					style={{ right: removeRight - 10 }}
					className={`button--clear-text ${
						removeBadge ? removeBadge : "sprite sprite--remove"
					}`}
				/>
			)}
			{(layoutStyle === "img" || layoutStyle === "img-bold") && (
				<div className={`input-image input-image__img-cvv input-image--${layoutStyle}`}>
					<span
						className={`input-image__img sprite sprite--${image} input-image__img--${layoutStyle} `}
					/>
				</div>
			)}
			{layoutStyle === "search" && (
				<div className={`input-search-image input-search-image__focus__${searchFocus}`}>
					<span
						className={`input-image__img sprite sprite--${layoutStyle} search-icon__${searchIcon}`}
					/>
					<span
						className={`input-search-image__placeholder input-search-image__placeholder__focus__${searchFocus}`}
					>
						{placeholder}
					</span>
				</div>
			)}
		</div>
	);
}
