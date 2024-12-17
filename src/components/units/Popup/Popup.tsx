import React from "react";
import "./Popup.scss";
import { StyledBtn, StyledContent, StyledPopup } from "./styles";

export type ClickAction = "accept" | "cancel" | "retry";

interface Props {
	onAccept?: Function;
	onRetry?: Function;
	close?: Function;
	cancel?: Function;
	acceptText?: string;
	closeText?: string;
	type?: "tryAgain" | "confirm" | "message";
	messageText?: string;
	theme?: string;
	tryAgainText?: string;
	children?: JSX.Element | JSX.Element[];
}

export default function Popup(props: Props) {
	const {
		onRetry,
		onAccept,
		close,
		cancel,
		children,
		acceptText = "تایید",
		closeText = "انصراف",
		tryAgainText = "تلاش مجدد",
		type = "confirm",
		messageText = "متوجه شدم",
	} = props;

	const handleBtnClick = (e) => {
		const { name: type }: { name: ClickAction } = e.target;

		switch (type) {
			case "accept":
				return onAccept?.();
			case "cancel":
				return cancel?.();
			case "retry":
				return onRetry?.();
			default:
				return close?.();
		}
	};

	return (
		<div className="popup-container" onClick={handleBtnClick}>
			<div className="popup-container__box" onClick={(e) => e.stopPropagation()}>
				{/*----Content---------------------------------*/}
				<StyledContent>{children}</StyledContent>
				{/*----Buttons---------------------------------*/}
				{type === "tryAgain" ? (
					<StyledPopup>
						<StyledBtn name="retry" onClick={handleBtnClick}>
							{tryAgainText}
						</StyledBtn>
						<StyledBtn name="cancel" onClick={handleBtnClick}>
							{closeText}
						</StyledBtn>
					</StyledPopup>
				) : (
					<StyledPopup>
						<StyledBtn name="accept" onClick={handleBtnClick}>
							{type === "message" ? messageText : acceptText}
						</StyledBtn>
						{type === "confirm" ? (
							<StyledBtn name="cancel" onClick={handleBtnClick}>
								{closeText}
							</StyledBtn>
						) : null}
					</StyledPopup>
				)}
			</div>
		</div>
	);
}
