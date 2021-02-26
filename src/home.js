import { setAttribute, swapTag } from './_functions';

export default () => {
	// Carousel
	setAttribute('.carousel-inner', 'aria-label', 'a photo slideshow of Sunset Inn');
	setAttribute('.carousel-inner > div', 'role', 'option');

	// Images
	setAttribute('.about__pic > .img-responsive', 'alt', 'A look inside of the cottage shows a red couch with side tables and lamps. The space is comfortable and cozy.');
	setAttribute('.row:nth-child(1) > .col-sm-6:nth-child(1) > a > figure > .img-responsive', 'alt', 'A view of the bedrooms inside the MacDill cottage.');
	setAttribute('.row:nth-child(1) > .col-sm-6:nth-child(2) > a > figure > .img-responsive', 'alt', 'A view of the bedroom in suite #4');
	setAttribute('.row:nth-child(2) > .col-sm-6:nth-child(1) > a > figure > .img-responsive', 'alt', 'A view of the bedrooms inside the Tandom Two cottage.');
	setAttribute('.row:nth-child(2) > .col-sm-6:nth-child(2) > a > figure > .img-responsive', 'alt', 'A view of the bedroom in suite #6');

	swapTag('#table8 > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > section.section__quote > div > div > div > p', 'h1');

	swapTag('#section__about > div.container-fluid > div > div > div:nth-child(2) > div > h3', 'h2');
}