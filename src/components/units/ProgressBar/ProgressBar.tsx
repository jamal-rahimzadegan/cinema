import React, { useState, useEffect } from "react";
import "./ProgressBar.scss";

interface Props {
	animationFrom?: any;
	animationTo?: any;
	animationTime?: string;
	height?: string;
	color?: string;
}

export default function ProgressBar(props: Props) {
	const { animationFrom, animationTime, animationTo, height, color } = props;
	const [animationEnable, setAnimationEnable] = useState(false);
	const [progressWidth, setProgressWidth] = useState(0);

	useEffect(() => {
		setProgressWidth(animationFrom);
		setTimeout(() => {
			setAnimationEnable(true);
			setProgressWidth(animationTo);
		}, 10);
	}, [animationFrom, animationTo]);

	return (
		<div
			style={{
				height: height,
				backgroundColor: color,
				width: progressWidth,
				transition: animationEnable
					? "width " + animationTime + " ease-in-out"
					: "width 0s",
			}}
			className="progressbar-wrapper"
		/>
	);
}
