import { setAttribute, swapTag, isHidden, insert, remove } from './_functions';

export default () => {
	if ( window.location.pathname === '/responsive-book.aspx' ) {
		setAttribute('#booking-guest-info-form\  > div.guest1.field-row.clearfix.additional-guests-fields > div.col-sm-1.col-xs-1 > button', 'aria-label', 'Add guest');

		setAttribute('#cb_creditCardDetailsUseLeadGuestAddress', 'aria-label', 'Use Lead Guests address');
		setAttribute('#creditCardDetailsCardZip', 'aria-label', 'Billing Post/Zip Code');
		setAttribute('#creditCardDetailsCardCity', 'aria-label', 'Billing City');
		setAttribute('#creditCardDetailsCardAddress1', 'aria-label', 'Billing Address 1');
		setAttribute('#creditCardDetailsCardAddress2', 'aria-label', 'Billing Address 2');
		setAttribute('#creditCardDetailsNameOnCard', 'aria-label', 'Cardholders Name');
		setAttribute('#creditCardDetailsCardNumber', 'aria-label', 'Credit card number');
		setAttribute('#creditCardDetailsCCV', 'aria-label', 'Credit card CCV');
		setAttribute('#creditCardDetailsPaymentAmount', 'aria-label', 'Amount to pay now');

		setAttribute('#cmbLeadGuestCountry', 'aria-label', 'Select your country of origin');
		setAttribute('#creditCardDetailsCardCountry', 'aria-label', 'Billing country');
		setAttribute('#creditCardDetailsCardType', 'aria-label', 'Credit Card Type');
		setAttribute('#creditCardDetailsCardExpireyMonth', 'aria-label', 'Credit Card Expiration Month');
		setAttribute('#creditCardDetailsCardExpireyYear', 'aria-label', 'Credit Card Expiration  Year');

		const quantitySelectors = document.querySelectorAll('#booking-guest-info-form select');
		if ( quantitySelectors ) {
			quantitySelectors.forEach(elm => {
				const labelElm = elm.parentNode.parentNode.querySelector('div:nth-child(2)');
				if ( labelElm ) {
					elm.setAttribute('aria-label', `${labelElm.innerText} quantity`);
				}
			});
		}

		setAttribute('h3.section__heading', 'class', 'section__heading black');
	}
}