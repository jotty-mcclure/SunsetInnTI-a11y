import { setAttribute, swapTag } from './_functions';

export default () => {
	if ( window.location.pathname === '/search.aspx' ) {
		setAttribute('#guest', 'aria-label', 'Number of guests');
		setAttribute('#Bedrooms', 'aria-label', 'Number of bedrooms');

		const propertyLinks = document.querySelectorAll('#propertyResultsConatiner > .hydrationcontainer');

		if ( propertyLinks.length ) {
			propertyLinks.forEach(property => {
				const picLink = property.querySelector('.rooms__pic > a');
				const labelDesc = property.querySelector('h2').innerText;
				picLink.setAttribute('aria-label', labelDesc);
			});
		}
	}
}