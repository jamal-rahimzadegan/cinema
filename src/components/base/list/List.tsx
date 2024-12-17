import { EmptyContent, Loading, Text } from "components";
import React, { ReactChildren, ReactNode } from "react";

interface Props<T = any> {
	testId?: string;
	isLoading?: boolean;
	visible?: boolean;
	isEmpty?: boolean;
	data?: T[];
	hasError?: boolean;
	emptyMsg?: string;
	className?: string;
	children: Element | ReactNode | JSX.Element | ReactChildren;
}

export default function List(props: Props): JSX.Element {
	const {
		children,
		data = [],
		isLoading = true,
		visible = true,
		hasError,
		emptyMsg,
		isEmpty,
		testId,
		className = "",
	} = props;

	const Content = (): JSX.Element => {
		if (isLoading) return <Loading />;
		else if (data?.length) return <>{children}</>;
		else if (isEmpty) return <EmptyContent msg={emptyMsg} />;
		else if (hasError) return <Text align="center">خطایی به وجود آمده است</Text>;
		else return <></>;
	};

	return (
		<div data-testid={testId} className={className + (isLoading ? " center-items" : "")}>
			{visible ? <Content /> : null}
		</div>
	);
}
