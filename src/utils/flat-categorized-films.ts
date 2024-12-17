export default function flatCategorizedFilms(categorizedFilms) {
	let films = [];

	if ("contents" in categorizedFilms) {
		categorizedFilms.contents.forEach((contentItem) => {
			if ("shows" in contentItem) {
				contentItem.shows.forEach((showItem) => {
					films.push(showItem);
				});
			}
		});
	}
	return {
		showList: films,
	};
}
