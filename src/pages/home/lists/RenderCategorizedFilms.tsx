import React, { Fragment } from "react";
import { FilmItem, HorizontalList, List, Text, RepeatedSpace, WhiteSpace } from "components";

interface Props {
	data: NestedObject[];
	isLoading: boolean;
	visible: boolean;
}

export default function RenderCategorizedFilms(props: Props) {
	const { data = [], isLoading, visible } = props;

	return (
		<>
			<WhiteSpace space={20} />
			<List
				data={data}
				isLoading={isLoading}
				visible={visible}
				emptyMsg="فیلمی در این دسته بندی موجود نمی باشد"
			>
				{data?.map((content, i) => (
					<Fragment key={i}>
						<Text size="extraLarge" align="right" isBold={true}>
							{content.title || ""}
						</Text>
						<WhiteSpace space={16} />
						<HorizontalList testId="cat-films">
							{content.shows?.map((filmItem, i) => (
								<Fragment key={filmItem.name + i}>
									<FilmItem data={filmItem} />
								</Fragment>
							))}
						</HorizontalList>
						<WhiteSpace space={20} />
						<RepeatedSpace />
					</Fragment>
				))}
			</List>
		</>
	);
}
