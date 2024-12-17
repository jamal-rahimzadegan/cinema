import { Loading } from "components";
import React from "react";

export default function Loader({ loader }) {
	return (
		<div className="infinite-scroll__loader" ref={loader}>
			<Loading />
		</div>
	);
}
