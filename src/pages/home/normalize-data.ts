export default function normalizeFilmData(items: FilmItem[], cb: Function, numberInRow: number) {
	let itemList = [];
	let temp = [];

	items.forEach((item, i) => {
		if (i % numberInRow === 0) temp = [];
		temp.push(item);
		if (i % numberInRow === 1) itemList.push(temp);
		if (i === items.length - 1 && i % numberInRow === 0) itemList.push(temp);
	});

	cb(itemList);
}
