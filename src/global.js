import { setAttribute } from './_functions';

export default () => {
	// document
	setAttribute('html', 'lang', 'en-us');

	// Buttons
	setAttribute('#goButton', 'aria-label', 'Submit search!');
	setAttribute('#btnSubscribe', 'aria-label', 'Subscribe!');

	// Images
	setAttribute('.west_logo > .img-responsive', 'alt', 'Sunset Inn and Cottages');
	setAttribute('.navbar-brand > .img-responsive', 'alt', 'Sunset Inn and Cottages');

	// iframe
	setAttribute('#iFrameResizer0', 'aria-hidden', 'true');

	setAttribute('#innerpagecontent', 'role', 'main');

	// Landmarks
	setAttribute('#form1 > div.section__info', 'role', 'banner');
	setAttribute('#form1 > nav', 'role', 'navigation');
	setAttribute('#table2-td1 > .section__quote', 'aria-label', 'Call to book now');

	const lightbox = document.querySelector('div#lightbox');
	if (lightbox) lightbox.setAttribute('id', 'lightbox-1');
}