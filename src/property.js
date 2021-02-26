import { setAttribute, swapTag } from './_functions';

export default () => {
	if ( window.location.pathname === '/details.aspx' ) {
		setAttribute('#content_descriptions1_availability1_ASPxCalendar1_KBS', 'aria-label', 'vacation dates');
		setAttribute('#content_descriptions1_GuestReviews1_txtGuestName_I', 'aria-label', 'Your name');
		setAttribute('#content_descriptions1_GuestReviews1_ckShowGuestName_S', 'aria-label', 'Show your name on review when published?');
		setAttribute('#content_descriptions1_GuestReviews1_txtGuestEmail_I', 'aria-label', 'Email address');
		setAttribute('#content_descriptions1_GuestReviews1_txtReview_I', 'aria-label', 'Review');
	}
}