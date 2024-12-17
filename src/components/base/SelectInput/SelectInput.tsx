import React from "react";
import { SpriteIcon } from "../../index";
import "./SelectInput.scss";

interface Props {
	value: any;
	onChange?: (a: any) => any;
	options: NestedObject;
}

export default function SelectInput(props: Props) {
	const { value, onChange, options } = props;
	return (
		<div className={"select-input"}>
			<div className="select-input__input__arrow">
				<SpriteIcon name={"sprite"} iconName={"drop-down"} />
			</div>
			<select
				value={value}
				className="select-input__input__original-select "
				onChange={onChange}
			>
				{options.map((option, i) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
}
