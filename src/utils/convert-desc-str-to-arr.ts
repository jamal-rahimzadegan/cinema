export default function convertDescStrToArr(description) {
	let descriptionArray = [];
	description.split("\n").forEach((descriptionItem) => {
		const descriptionSplitedItem: NestedObject = {};
		const descriptionItemArray = descriptionItem.split(":");
		descriptionSplitedItem.name = descriptionItemArray[0];
		descriptionSplitedItem.value = descriptionItemArray[1];
		descriptionArray.push(descriptionSplitedItem);
	});
	return descriptionArray;
}
