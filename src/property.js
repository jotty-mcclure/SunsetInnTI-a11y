import { setAttribute, swapTag, isHidden, insert, remove } from './_functions';
import propertyDetails from './_propertyDetails';

const insertPropDetails = (id) => {
	const property = propertyDetails.find(p => p.id == id);

	if ( property ) {
		const {
			name,
			roomSqft,
			bathroomSqft,
			floorspaceSqft,
			railHeight,
			tubOrShower,
		} = property;

		const message = `<p>The square footage of the ${name} is ${roomSqft} square feet. The square footage of the bathroom is ${bathroomSqft} sq ft with ${floorspaceSqft} sq ft of floor space with a ${tubOrShower} with a ${railHeight} high rail. We do have a shower chair available upon request, based on a first come first serve basis</p>
	
		<p>The ${name} is not wheelchair accessible.</p>
		
		<p>This property was built prior to the enactment of the Americans With Disabilities Act.  Unfortunately, none of the bathrooms are wheelchair accessible and it is not readily achievable to modify them to make them larger.  We apologize for any inconvenience. If there is anything we can do to accommodate you during your stay, please let us know.</p>
		
		<p>Please be aware that no reservation is final until it has been confirmed by the hotel.</p>
		
		<p>Only hotel guests with a confirmed reservation are allowed to enter the property.</p>`;

		insert('div.room__desc', 'afterend', message);
	}
}

export default () => {
	if ( window.location.pathname === '/details.aspx' ) {
		setAttribute('#content_descriptions1_availability1_ASPxCalendar1_KBS', 'aria-label', 'vacation dates');
		setAttribute('#content_descriptions1_GuestReviews1_txtGuestName_I', 'aria-label', 'Your name');
		setAttribute('#content_descriptions1_GuestReviews1_ckShowGuestName_S', 'aria-label', 'Show your name on review when published?');
		setAttribute('#content_descriptions1_GuestReviews1_txtGuestEmail_I', 'aria-label', 'Email address');
		setAttribute('#content_descriptions1_GuestReviews1_txtReview_I', 'aria-label', 'Review');
		setAttribute('.fotorama__arr--prev', 'aria-label', 'previous');
		setAttribute('.fotorama__arr--next', 'aria-label', 'next');
		setAttribute('.fotorama__nav__shaft > div.fotorama__nav__frame', 'aria-label', 'view full size image');

		setAttribute('#room-detail__page > section.section__room-detail > div > div > div.col-sm-7.col-md-8.main_content > div:nth-child(4)', 'style', 'display:none;');

		setAttribute(`#location iframe`, 'title', 'View our location on google maps!');

		// insert extra property details
		const urlParams = new URLSearchParams(window.location.search);
		const PropertyID = urlParams.get('PropertyID');
		insertPropDetails(PropertyID);

		// fix star rating/review widget
		swapTag('#content_descriptions1_GuestReviews1_Reviews_ICell a', 'span');

		setAttribute('.ui-datepicker-month', 'aria-label', 'select month');
		setAttribute('.ui-datepicker-year', 'aria-label', 'select year');

		const dp = document.querySelector('#ui-datepicker-div');

		if ( dp ) {
			const observer = new MutationObserver((mutationsList, observer) => {
				const elm = mutationsList[mutationsList.length - 1].target;
	
				if ( !isHidden(elm) ) {
					setAttribute('.ui-datepicker-month', 'aria-label', 'select month');
					setAttribute('.ui-datepicker-year', 'aria-label', 'select year');
				}
			});
			observer.observe(dp, { attributes: true, childList: false, subtree: false });
		}

		setAttribute('#content_descriptions1_GuestReviews1_btnSubmitReview', 'role', 'button');

		// Star rating
		setAttribute('#content_descriptions1_GuestReviews1_txtStarRating > a:nth-child(2)', 'title', 'one star rating');
		setAttribute('#content_descriptions1_GuestReviews1_txtStarRating > a:nth-child(3)', 'title', 'two star rating');
		setAttribute('#content_descriptions1_GuestReviews1_txtStarRating > a:nth-child(4)', 'title', 'three star rating');
		setAttribute('#content_descriptions1_GuestReviews1_txtStarRating > a:nth-child(5)', 'title', 'four star rating');
		setAttribute('#content_descriptions1_GuestReviews1_txtStarRating > a:nth-child(6)', 'title', 'five star rating');

		// Book widget
		setAttribute('#DateFrom', 'placeholder', 'Arrival date');
		setAttribute('#DateFrom', 'aria-label', 'Arrival date - MM/DD/YYYY');
		setAttribute('#DateFrom', 'autocomplete', 'off');

		setAttribute('#DateTo', 'placeholder', 'Departure date');
		setAttribute('#DateTo', 'aria-label', 'Departure date - MM/DD/YYYY');
		setAttribute('#DateTo', 'autocomplete', 'off');

		swapTag('#reservationform2 > a,#reservationform3 > a', 'p');
		setAttribute('#reservationform2 > p,#reservationform3 > p', 'class', 'quote-title');

		// remove('#book');
	}
}