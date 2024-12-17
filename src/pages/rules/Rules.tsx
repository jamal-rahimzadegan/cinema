import React from "react";
import { RULES } from "constant";
import { Text } from "components";
import { RulesContainer, CloseBtn } from "./styles";

interface Props {
	isShow: boolean;
	close: Function;
}

export default function Rules(props: Props) {
	const { isShow, close } = props;

	return isShow ? (
		<RulesContainer>
			<div>
				<CloseBtn onClick={() => close()}>✖</CloseBtn>
				<Text size="extraLarge" isBold align="center" className="mt-3 mb-2">
					قوانین و مقررات
				</Text>
				{Object.entries(RULES).map(([number, content]) => (
					<Text size="medium" align="justify" className="my-4">
						{number}- {content}
					</Text>
				))}
			</div>
		</RulesContainer>
	) : (
		<></>
	);
}
