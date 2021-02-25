function setAttribute(selector, attr, value) {
	const elms = document.querySelectorAll(selector);
	if ( elms.length ) {
		elms.forEach(elm => elm.setAttribute(attr, value));
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	// document
	setAttribute('html', 'lang', 'en-us');

	// Carousel
	setAttribute('.carousel-inner', 'aria-label', 'a photo slideshow of Sunset Inn');
	setAttribute('.carousel-inner > div', 'role', 'option');

	// Buttons
	setAttribute('#goButton', 'aria-label', 'Submit search!');
	setAttribute('#btnSubscribe', 'aria-label', 'Subscribe!');

	// Images
	setAttribute('.west_logo > .img-responsive', 'alt', 'Sunset Inn and Cottages');
	setAttribute('.navbar-brand > .img-responsive', 'alt', 'Sunset Inn and Cottages');
	setAttribute('.about__pic > .img-responsive', 'alt', 'A look inside of the cottage shows a red couch with side tables and lamps. The space is comfortable and cozy.');
	setAttribute('.row:nth-child(1) > .col-sm-6:nth-child(1) > a > figure > .img-responsive', 'alt', 'A view of the bedrooms inside the MacDill cottage.');
	setAttribute('.row:nth-child(1) > .col-sm-6:nth-child(2) > a > figure > .img-responsive', 'alt', 'A view of the bedroom in suite #4');
	setAttribute('.row:nth-child(2) > .col-sm-6:nth-child(1) > a > figure > .img-responsive', 'alt', 'A view of the bedrooms inside the Tandom Two cottage.');
	setAttribute('.row:nth-child(2) > .col-sm-6:nth-child(2) > a > figure > .img-responsive', 'alt', 'A view of the bedroom in suite #6');

	// input elements
	setAttribute('#locationID', 'aria-label', 'Destination');
	setAttribute('#guest', 'aria-label', 'Number of guests');

	// iframe
	setAttribute('#iFrameResizer0', 'aria-label', 'Instagram photo gallery');

	setAttribute('div.reservation__form label', 'style', 'color: #000;');

	setAttribute('#innerpagecontent', 'role', 'main');
});