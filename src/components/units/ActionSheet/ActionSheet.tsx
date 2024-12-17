import React, { useState, forwardRef, useImperativeHandle, MouseEventHandler } from "react";
import SpriteIcon from "../sprite-icon/SpriteIcon";
import "./ActionSheet.scss";

interface Props {
	onClose: MouseEventHandler<HTMLDivElement>;
	children: JSX.Element | JSX.Element[];
}

function ActionSheet(props: Props, ref) {
	const { onClose, children } = props;
	const [showItemsWrapper, setShowItemsWrapper] = useState(false);
	const [fullHeightWrapper, setFullHeightWrapper] = useState(false);

	useImperativeHandle(ref, () => ({
		onSetShowItemsWrapper(value) {
			setShowItemsWrapper(value);
		},

		onSetFullHeightWrapper(value) {
			setFullHeightWrapper(value);
		},
	}));

	return (
		<div
			onClick={onClose}
			className={`action-sheet-wrapper ${
				showItemsWrapper ? "action-sheet-wrapper--show" : null
			}`}
		>
			{fullHeightWrapper ? (
				<div className="action-sheet-wrapper__minify" onClick={onClose}>
					✖
				</div>
			) : null}

			<div
				onClick={(e) => e.stopPropagation()}
				className={`action-sheet-wrapper__items-wrapper
                ${showItemsWrapper ? "action-sheet-wrapper__items-wrapper--show" : ""} ${
					fullHeightWrapper ? "action-sheet-wrapper__items-wrapper--full-height" : null
				}`}
			>
				{children}
			</div>
		</div>
	);
}

export default forwardRef(ActionSheet);
