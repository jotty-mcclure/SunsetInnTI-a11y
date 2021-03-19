const setAttribute = (selector, attr, value) => {
	const elms = document.querySelectorAll(selector);
	if ( elms.length ) {
		elms.forEach(elm => elm.setAttribute(attr, value));
	}
}

const swapTag = (selector, newTag) => {
	const elms = document.querySelectorAll(selector);

	if ( elms.length ) {
		elms.forEach(elm => {
			const newElm = document.createElement(newTag);
			newElm.innerHTML = elm.innerHTML;
			elm.parentNode.replaceChild(newElm, elm);
		});
	}
}

// coppied from https://stackoverflow.com/a/21696585
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

export {
	setAttribute,
	swapTag,
	isHidden,
};