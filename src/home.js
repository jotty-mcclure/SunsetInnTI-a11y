import { setAttribute, swapTag, remove, insert } from './_functions';

export default () => {
	if ( window.location.pathname === '/index.aspx' || window.location.pathname === '/' ) {
		// Carousel - remove this thing... it is unneededd.
		// setAttribute('.carousel-inner', 'aria-label', 'a photo slideshow of Sunset Inn');
		// setAttribute('.carousel-inner > div', 'role', 'option');
		setTimeout(() => {
			insert(
				'section#section__home > #carousel-example-generic',
				'afterend',
				`<img alt="Sunset Inn &amp; Cottages" style="width:100%" src="https://cdn.ciirus.com/WebTemplates/51367/assets/img/slides/home-bg2.jpg" role="presentation" />`
			);
			remove('section#section__home > #carousel-example-generic');
		}, 250);

		// Images
		setAttribute('.about__pic > .img-responsive', 'alt', 'A look inside of the cottage shows a red couch with side tables and lamps. The space is comfortable and cozy.');
		setAttribute('.row:nth-child(1) > .col-sm-6:nth-child(1) > a > figure > .img-responsive', 'alt', 'A view of the bedrooms inside the MacDill cottage.');
		setAttribute('.row:nth-child(1) > .col-sm-6:nth-child(2) > a > figure > .img-responsive', 'alt', 'A view of the bedroom in suite #4');
		setAttribute('.row:nth-child(2) > .col-sm-6:nth-child(1) > a > figure > .img-responsive', 'alt', 'A view of the bedrooms inside the Tandom Two cottage.');
		setAttribute('.row:nth-child(2) > .col-sm-6:nth-child(2) > a > figure > .img-responsive', 'alt', 'A view of the bedroom in suite #6');

		swapTag('#table8 > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > section.section__quote > div > div > div > p', 'h1');

		swapTag('#section__about > div.container-fluid > div > div > div:nth-child(2) > div > h3', 'h2');
	}
}