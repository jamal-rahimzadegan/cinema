import React from "react";
import "./Ellipsis.scss";

interface Props {
	layoutStyle?: string;
	half?: boolean;
	color?: string;
}

export default function Ellipsis(props: Props) {
	const { color = "white", layoutStyle, half = true } = props;

	return (
		<div className={`${layoutStyle}-ellipsis`}>
			<div className={`lds-ellipsis lds-ellipsis--${color}  ${half && "lds-ellipsis--half"}`}>
				<div>
					<div />
				</div>
				<div>
					<div />
				</div>
				<div>
					<div />
				</div>
				<div>
					<div />
				</div>
				<div>
					<div />
				</div>
			</div>
		</div>
	);
}
