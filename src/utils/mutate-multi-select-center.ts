// Example
// mutateMultiSelectCenterOption('select[name="fruit"]','big',20)

function handleMutate() {
	const getTextWidth = (text, textClass) => {
		let span = document.createElement("span");
		span.style.opacity = "0";
		span.style.display = "inline-block";
		span.innerHTML = text;
		if (textClass) span.classList.add(textClass);
		let width = span.offsetWidth;
		span.remove();
		return width;
	};

	const getSelectOptionIndentToCenter = (selectElement, textClass) => {
		let selectChoice = selectElement.querySelector("option:checked");
		let emptySpace =
			selectElement.offsetWidth - getTextWidth(selectChoice.innerHTML, textClass);
		return emptySpace / 2;
	};

	const mutateSelectCenterOption = (selectElement, textClass, offset) => {
		let centerOffset = getSelectOptionIndentToCenter(selectElement, textClass);
		selectElement.style.textIndent = centerOffset - offset + "px";
	};

	let $$;
	$$ = $$
		? $$
		: function (selector, scope) {
				let updatedScope = scope ? scope : document;
				return Array.prototype.slice.call(updatedScope.querySelectorAll(selector));
		  };

	return (selector, textClass, offset) => {
		!!$$ &&
			$$(selector).map(function (selectElement) {
				selectElement.addEventListener("change", (event) => {
					mutateSelectCenterOption(event.target, null, offset);
				});
				mutateSelectCenterOption(selectElement, textClass, offset);
			});
	};
}

const mutateMultiSelectCenter = handleMutate();
export default mutateMultiSelectCenter;
