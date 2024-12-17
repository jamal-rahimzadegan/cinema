import React from "react";

interface Props {
	fontSize?: number;
	fontWeight?: "normal" | "bold";
	title: string;
}

export default function ExampleComponent(props: Props): JSX.Element {
	const { fontSize = 15, fontWeight = "normal" } = props;
	return <p style={{ fontSize, fontWeight }}>{fontWeight} text !!!!</p>;
}
