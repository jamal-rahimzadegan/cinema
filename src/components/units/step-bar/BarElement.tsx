import React from "react";

interface BarType {
	percentage?: number;
	count?: number;
}

export default function BarElement(barProps: BarType) {
	const { percentage = 0, count = 4 } = barProps;
	const eachItemWidth = 100 / count;
	const notOverflowPercentage = percentage > 100 ? 100 : percentage;

	const styles = {
		child: { width: notOverflowPercentage + `%` },
		parent: {
			left: `calc(${eachItemWidth}% / 2)`,
			width: `calc(100% - ${eachItemWidth}%)`,
		},
	};

	return (
		<div className="step-bar__progress-bar" style={styles.parent}>
			<div style={styles.child} className="step-bar__progress" />
		</div>
	);
}
