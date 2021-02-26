import { setAttribute, swapTag } from './_functions';

export default () => {
	if ( window.location.pathname === '/contactus.aspx' ) {
		document.title = 'Contact Us - Sunset Inn & Cottages';

		setAttribute('#content_contact1_txtName_I', 'aria-label', 'Your Name');
		setAttribute('#content_contact1_txtEmail_I', 'aria-label', 'Email');
		setAttribute('#content_contact1_txtTelephone_I', 'aria-label', 'Telephone Number');
		setAttribute('#content_contact1_dteArrive_I', 'aria-label', 'Arrival Date');
		setAttribute('#content_contact1_dteDepart_I', 'aria-label', 'Ddeparture Date');
		setAttribute('#content_contact1_cmbPartySize_I', 'aria-label', 'Number of people in your group');
		setAttribute('#content_contact1_cmbLocation_I', 'aria-label', 'Where are you from?');
		setAttribute('#content_contact1_txtComments_I', 'aria-label', 'Any other comments');
	}
}