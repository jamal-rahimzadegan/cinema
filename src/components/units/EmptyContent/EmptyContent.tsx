import { Text } from "components";
import React from "react";

interface Props {
	msg?: string;
	testId?: string;
}

export default function EmptyContent(props: Props): JSX.Element {
	const { msg, testId } = props;
	return (
		<Text align="center" data-testid={testId} className="my-3">
			{msg || "موردی وجود ندارد"}
		</Text>
	);
}
