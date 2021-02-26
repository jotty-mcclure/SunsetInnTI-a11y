import { setAttribute, swapTag } from './_functions';

export default () => {
	// only on blog home
	if ( window.location.pathname === '/blog.aspx' ) {
		document.title = 'Attractions - Sunset Inn & Cottages';
	}

	// all blog type pages
	if ( window.location.pathname.includes('/blog') ) {
		setAttribute('#content_PanelSearch_txtSearch_I', 'aria-label', 'search articles');
	}

	// only on article pages
	if ( window.location.pathname.includes('/blog/') ) {
		setAttribute('#content_txtName_I', 'aria-label', 'Your name');
		setAttribute('#content_txtEmail_I', 'aria-label', 'Your email');
		setAttribute('#content_cbAnonymous_S', 'aria-label' ,'post as anonymous');
		setAttribute('#content_txtAddComment_I', 'aria-label', 'comment');
	}
}