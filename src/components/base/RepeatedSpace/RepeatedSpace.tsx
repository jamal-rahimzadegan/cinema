import React from "react";
import { Section, Seperator, WhiteSpace } from "../../index";

export default function RepeatedSpace() {
	return (
		<div>
			<Section>
				<Seperator />
			</Section>
			<WhiteSpace space={20} />
		</div>
	);
}
