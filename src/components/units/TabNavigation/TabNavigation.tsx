import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./TabNavigation.scss";

interface Props {
	tabs: NestedObject[];
	onTabActive: Function;
}

function TabNavigation(props: Props, ref) {
	const { tabs, onTabActive } = props;
	const [activeTabIndex, setActiveTabindex] = useState<number>(0);

	useImperativeHandle(ref, () => ({
		onSetActivateTabIndex(indexValue) {
			setActiveTabindex(indexValue);
		},
	}));

	return (
		<div className="tab-navigation-wrapper">
			{tabs.map((tab, index) => (
				<div
					onClick={() => onTabActive(tab)}
					key={index}
					style={{ width: `${100 / tabs.length}%` }}
					className={`tab-navigation-wrapper__item ${
						activeTabIndex === index ? "tab-navigation-wrapper__item--active" : ""
					}`}
				>
					{tab.value}
				</div>
			))}
		</div>
	);
}

export default forwardRef(TabNavigation);
