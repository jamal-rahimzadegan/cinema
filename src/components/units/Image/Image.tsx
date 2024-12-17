import React from "react";
import "./Image.scss";

interface Props {
	circle?: boolean;
	width: string;
	height: string;
	imageAlt?: string;
	align: string;
	imageAsset: any;
	classList: [];
}

Image.defaultProps = {
	circle: false,
	imageAlt: "",
	align: "center",
	classList: [],
};

export default function Image(props: Props) {
	const { imageAlt, imageAsset, classList, align, circle, height, width } = props;

	return (
		<div
			className={[
				"image-container",
				circle && `image-container--${circle && "circle"}`,
				`image-container--${align}`,
			].join(" ")}
			style={{ width: width, height: height }}
		>
			<img
				className={`image-container__image ${classList.join(" ")}`}
				alt={imageAlt}
				src={imageAsset}
			/>
		</div>
	);
}
