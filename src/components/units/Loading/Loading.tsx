import React from "react";
import { LoadingContainer } from "./styles";

interface Props {
	className?: string;
}

export default function Loading(props: Props) {
	const { className = "" } = props;
	return (
		<div className="w-full flex place-items-center bg-danger justify-center h-10">
			<LoadingContainer className={className} />
		</div>
	);
}
