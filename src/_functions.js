const setAttribute = (selector, attr, value) => {
	const elms = document.querySelectorAll(selector);
	if ( elms.length ) {
		elms.forEach(elm => elm.setAttribute(attr, value));
	}
}

const removeAttribute = (selector, attr) => {
	const elms = document.querySelectorAll(selector);
	if ( elms.length ) {
		elms.forEach(elm => elm.removeAttribute(attr));
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

function remove(selector) {
	const elms = document.querySelectorAll(selector);

	if ( elms.length ) {
		elms.forEach(elm => elm.remove());
	}
}

function insert(selector, position='afterend', html) {
	const elm = document.querySelector(selector);

	if ( elm ) {
		elm.insertAdjacentHTML(position, html);
	}
}

export {
	setAttribute,
	removeAttribute,
	swapTag,
	isHidden,
	remove,
	insert,
};