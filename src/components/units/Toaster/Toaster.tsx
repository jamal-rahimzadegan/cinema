import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./Toaster.scss";
import Text from "../Paragraph/Text";
import WhiteSpace from "../WhiteSpace/WhiteSpace";

interface Props {
	fromTop?: boolean;
}

function Toaster(props: Props, ref) {
	const { fromTop = false } = props;
	const [show, setShow] = useState<boolean>(false);
	const [text, setText] = useState<string>("");

	useImperativeHandle(ref, () => ({
		onShowToaster(text) {
			setShow(true);
			setText(text);
			setTimeout(() => setShow(false), 2000);
		},
	}));

	return (
		<div
			className={`toaster-wrapper
        ${show ? "toaster-wrapper--show" : ""}
        ${props.fromTop ? "toaster-wrapper--from-top" : "toaster-wrapper--from-bottom"}
        `}
		>
			<WhiteSpace space={5} />
			<Text size="small">{text}</Text>
			<WhiteSpace space={5} />
		</div>
	);
}

export default forwardRef(Toaster);
