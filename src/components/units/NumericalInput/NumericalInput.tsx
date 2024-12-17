import React from "react";
import "./NumericalInput.scss";
import { Text } from "../../index";

interface Props {
	value: number;
	max: number;
	updateValue: Function;
}

export default function NumericalInput(props: Props) {
	const { value, updateValue, max } = props;

	const increaseCount = () => value < max && updateValue(value + 1);
	const decreaseCount = () => value > 1 && updateValue(value - 1);

	return (
		<div className="numerical-input">
			<Text color="black" className="numerical-input__title">
				تعداد صندلی
			</Text>
			<section className="numerical-input__value">
				<button onClick={increaseCount}>▲</button>
				<p>{value}</p>
				<button onClick={decreaseCount}>▼</button>
			</section>
		</div>
	);
}
