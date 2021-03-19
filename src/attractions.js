import { setAttribute, swapTag } from './_functions';

export default () => {
	if ( window.location.pathname === '/content/attractions.aspx' ) {
		document.title = 'Attractions - Sunset Inn & Cottages';

		const iframeSelector = '#about__page > section:nth-child(2) > div > div > div > iframe';
		setAttribute(iframeSelector, 'aria-label', 'attractions map');
		setAttribute(iframeSelector, 'aria-hidden', 'true');
		
		const linkToGmap = `<p><a href="https://www.google.com/maps/d/u/0/viewer?mid=1BAPWwfSUvonpkCR9z986jDgY4NswTr5R&ll=27.819901564051797%2C-82.65487445000001&z=11" target="_blank">Click here to learn more about local restaurants, breweries, art museums, and more!</a> </p>`;

		document
			.querySelector(iframeSelector)
			.insertAdjacentHTML('beforebegin', linkToGmap);
	}
}