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

export {
	setAttribute,
	swapTag,
};