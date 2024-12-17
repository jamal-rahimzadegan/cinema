import React, { useEffect } from "react";
import { setNativePageTitle } from "utils";
import { useRouterStack } from "hooks";
import "./Page.scss";

interface Props {
	pageTitle?: string;
	className?: string;
	children: JSX.Element | JSX.Element[];
}

export default function Page(props: Props) {
	const { className = "", pageTitle = "سینما", children } = props;
	useRouterStack();

	const managePageTitle = () => {
		setNativePageTitle(pageTitle);
		document.title = pageTitle;
	};

	useEffect(managePageTitle, []);

	return <div className={"page " + className}>{children}</div>;
}
