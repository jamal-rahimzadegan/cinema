import React, { Fragment } from "react";
import { FilmItem, List } from "components";

interface Props {
	data: FilmItem[];
	isLoading: boolean;
}

export default function RenderFilmList(props: Props): JSX.Element {
	const { data = [], isLoading } = props;

	return (
		<List
			testId="home-film-list"
			data={data}
			isLoading={isLoading}
			isEmpty={!data.length}
			emptyMsg="هیچ فیلمی پیدا نشد"
		>
			<div className="home__film-list-wrapper">
				{data.map((item, i) => (
					<Fragment key={item.name + i}>
						<FilmItem data={item} />
					</Fragment>
				))}
			</div>
		</List>
	);
}
