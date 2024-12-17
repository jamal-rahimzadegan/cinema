import React, { Fragment } from "react";
import { QueryStatus } from "react-query";
import { CinemaCard, List } from "components";

interface Props {
	cinemas: CinemaItem[];
	filmUid: string;
	status: QueryStatus;
}

function RenderCinemaList(props: Props): JSX.Element {
	const { cinemas = [], filmUid, status } = props;

	return (
		<List
			className="pb-16"
			data={cinemas}
			isLoading={status === "loading"}
			isEmpty={!cinemas?.length}
			emptyMsg="هیچ سینمایی پیدا نشد"
			testId="cinema-list"
		>
			{cinemas.map((item) => (
				<Fragment key={item.id}>
					<CinemaCard cinema={item} filmId={filmUid} />
				</Fragment>
			))}
		</List>
	);
}

export default React.memo(RenderCinemaList);
