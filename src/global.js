import { setAttribute, isHidden } from './_functions';

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
	setTimeout(() => setAttribute('#iFrameResizer0', 'aria-hidden', 'true'), 1000);

	setAttribute('#innerpagecontent', 'role', 'main');

	// Landmarks
	setAttribute('#form1 > div.section__info', 'role', 'banner');
	setAttribute('#form1 > nav', 'role', 'navigation');
	setAttribute('#table2-td1 > .section__quote', 'aria-label', 'Call to book now');

	const lightbox = document.querySelector('div#lightbox');
	if (lightbox) lightbox.setAttribute('id', 'lightbox-1');

	const footer__copyright = document.querySelector('#table2-td1 > footer > div > div.footer__copyright > div > div');
	if (footer__copyright) {
		const a11yBookMessage = document.createElement('p');
		a11yBookMessage.innerText = 'If you are disabled and need assistance in using our services, or obtaining information you need about our services, please call us at 1-727-420-8788 and we will be happy to assist you.';
		a11yBookMessage.setAttribute('id', 'a11y-assistance-message');
		footer__copyright.appendChild(a11yBookMessage);
	}
	
	// Banner fixes
	setAttribute('#dropdownMenu1', 'aria-label', 'Language selection');
	const searchForm = document.querySelector('.section__info div.search-form.propCodeWrapper');
	if ( searchForm ) searchForm.remove();

	const langMenu = document.querySelector('#ciirusBody .section__info .section_info__body .info__column-right .lang-menu');
	const observer = new MutationObserver((mutationsList) => {
		const elm = mutationsList[mutationsList.length - 1].target;

		if ( !isHidden(elm) ) {
			setAttribute('.lang-menu ul > li > a', 'tabindex', '0');
			elm.querySelector('ul > li:first-child > a').focus();
		}
	});
	observer.observe(langMenu, { attributes: true, childList: false, subtree: false });

	setAttribute('#ciirusBody .section__info .section_info__body div.info__column-left > div > p > a > img', 'role', 'presentation');

	// Menu
	const mainMenu = document.querySelector('nav.navbar ul.nav.navbar-nav.navbar-right > li.dropdown');
	setAttribute('nav.navbar ul.nav.navbar-nav.navbar-right > li.dropdown ul li a', 'tabindex', '0');
	const mainMenuObserver = new MutationObserver((mutationsList) => {
		const elm = mutationsList[mutationsList.length - 1].target;
		const isOpen = elm.className.includes('open');

		if ( isOpen ) {
			elm.querySelector('ul.nav.navbar-nav.navbar-right > li.dropdown ul li:first-child a').focus();
		}
	});
	mainMenuObserver.observe(mainMenu, { attributes: true, childList: false, subtree: false });

	setAttribute('footer p.newsletter__subtitle','id','newsletter__subtitle');
	setAttribute('input#SubscribeEmail','aria-labelledby','newsletter__subtitle');
}