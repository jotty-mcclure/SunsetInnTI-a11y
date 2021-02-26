import { setAttribute, swapTag } from './_functions';

export default () => {
	if ( window.location.pathname === '/content/help.aspx' ) {
		document.title = 'Frequently Asked Questions - Sunset Inn & Cottages';
	}
}