import { setAttribute, swapTag } from './_functions';

export default () => {
	if ( window.location.pathname === '/content/attractions.aspx' ) {
		document.title = 'Attractions - Sunset Inn & Cottages';

		setAttribute('#about__page > section:nth-child(2) > div > div > div > iframe', 'aria-label', 'attractions map');
	}
}