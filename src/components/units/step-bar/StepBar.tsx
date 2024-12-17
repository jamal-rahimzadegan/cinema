import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "redux/reducers";
import { useCallAction } from "hooks";
import { SpriteIcon } from "../../index";
import "./StepBar.scss";
import BarElement from "./BarElement";

interface Props {
	step: number;
	pageCount?: number;
	className?: string;
}

type DotVariantType = { variant: "current" | "completed" };

export default function StepBar(props: Props) {
	const { step, pageCount = 4, className = "" } = props;
	const [page, setPage] = useState<number>(step);
	const callAction = useCallAction();

	const handleStepBarPosition = (pos) => {
		callAction("SET_STEP_BAR_POSITION", { stepbarPosition: pos });
	};

	const setPageValue = useCallback(
		(page) => {
			if (page >= 0 && page <= pageCount) {
				setPage(page);
				handleStepBarPosition(page);
			}
		},
		[handleStepBarPosition]
	);

	const getVariant = (id) => {
		if (id < step) return "completed";
		else if (id === step) return "current";
	};

	const Dot = (dotProps: DotVariantType) => {
		const { variant } = dotProps;
		if (variant === "current") return <SpriteIcon name="sprite" iconName="current-step" />;
		if (variant === "completed") return <SpriteIcon name="sprite" iconName="completed-step" />;
		return <SpriteIcon name="sprite" iconName="next-steps" />;
	};

	useEffect(() => {
		setPageValue(page);
		setTimeout(() => setPageValue(step), 10);
	}, [page, step]);

	return (
		<ul className={"step-bar " + className}>
			<BarElement count={pageCount} percentage={(100 / (pageCount - 1)) * step} />
			{Array.from(Array(pageCount), (e, i) => (
				<li key={i} className="step-bar__item">
					<Dot variant={getVariant(i)} />
				</li>
			))}
		</ul>
	);
}
