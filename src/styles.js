function stylesheetLoader(styles) {
	var css = styles[0],
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	head.appendChild(style);
	
	if (style.styleSheet) {
		// This is required for IE8 and below.
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
}

export default () => {
	stylesheetLoader`
		.west_logo > span {
			color: #222;
		}

		.navbar-default .navbar-nav>.active>a {
			color: #222;
			border-bottom: 2px solid #FD9109;
		}

		#navbar__collapse > ul.nav.navbar-nav > li > a {
			color: #333;
		}

		.BodyText[align="left"][valign="top"] > .section__quote {
			color: #000;
		}

		section.section__quote .btn {
			color: #000;
		}

		#ciirusBody .section__about .section_about__content .about__desc .about_desc__subtitle {
			color: #000;
		}

		#ciirusBody .section__testimonials .testimonials__body .testimonials__wrapper .testimonials__item .testimonials__caption .testimonials_caption__prof{
			color: #000;
		}

		.section-quote__text {
			color: #000;
		}

		#table2-td1 > footer > div > div.footer__body > div > div.col-xs-12.col-sm-4.col-sm-pull-4 > div:nth-child(5) > a > span {
			color: #fff;
		}

		#table2-td1 > div.bodyTextSm > table > tbody > tr > td > font {
			color: #000;
		}

		#table2-td1 > div.bodyTextSm > table > tbody > tr > td > font * {
			color: #0000ff;
		}

		#table2-td1 > footer > div > div.footer__body > div > div.col-xs-12.col-sm-4.col-sm-pull-4 > div:nth-child(5) {
			display: none;
		}

		#gallery__carousel > .owl-nav > .owl-next,
		#gallery__carousel > .owl-nav > .owl-prev{
			color: #000;
		}

		#about__page > section.calltoAction > div > div > div > h2 {
			color: #000;
		}

		#rooms-1__page > section.section__availability > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(3) {
			display: none;
		}

		#reservationform b {
			color: #1F7A7A !important;
		}

		#reservationform > div:nth-child(3) > div > button,
		#content_descriptions1_rates1_RatesGrid_DXHeadersRow0 td,
		#content_descriptions1_rates1_RatesGrid_DXGroupRowExp0 > td:nth-child(2),
		#content_descriptions1_GuestReviews1_txtReview_I,
		b.dxp-num.dxp-current {
			color: #000 !important;
		}

		#room-detail__page .section__room-detail .room_detail__body .room_price__body .room__price,
		#room-detail__page h3.subheading {
			color: #1F7A7A !important;
		}

		.ui-datepicker select.ui-datepicker-month, .ui-datepicker select.ui-datepicker-year {
			color: #1F7A7A !important;
		}

		.ui-state-disabled, .ui-widget-content .ui-state-disabled,
		.ui-datepicker .ui-datepicker-unselectable.ui-state-disabled .ui-state-default {
			color: #757575 !important;
			opacity: 1 !important;
			cursor: not-allowed;
			text-decoration: none;
		}

		.ui-state-default.ui-state-highlight,
		.ui-widget-content .ui-state-default.ui-state-highlight,
		.ui-widget-header .ui-state-highlight,
		.ui-datepicker .ui-state-active,
		#content_descriptions1_rates1_pnlRateNotes_RPHT {
			color: #000 !important;
		}

		.ui-datepicker .ui-state-default {
			color: #1F7A7A !important;
			text-decoration: underline;
		}

		#room-detail__page .section__home .welcome__content {
			background: rgba(0,0,0,.7);
			border-radius: 1rem;
		}

		#rooms-1__page .section__rooms-1 .rooms__item .rooms__desc .rooms_desc__header .rooms_desc__title {
			font-size: 20px;
		}

		#rooms-1__page .section__rooms-1 .rooms__item .rooms__desc .rooms_desc__header .rooms_desc__price {
			color: #1F7A7A !important;
		}

		a.btn.btn-rooms.detailsBtn {
			color: #000;
		}

		#ciirusBody .section__availability .reservation__form>.form-group>.form-group__inner>label, 
		#ciirusBody .section__availability .reservation__button .btn,
		button#book,
		button.res-btn.btn {
			color: #000 !important;
		}

		#ciirusBody .section__best-rooms .best-rooms__content .best-rooms__item figcaption>h3,
		#ciirusBody .section__best-rooms .best-rooms__content .best-rooms__item figcaption .item__price {
			background: rgba(0,0,0,.5);
    		padding: 0 .5rem;
		}
		
		.dxpLite_PlasticBlue .dxp-button,
		#contacts__page > section.section__contacts > div.container > div > div.col-sm-5 > div > ul > li > div > div:nth-child(3) > a{
			color: blue;
		}

		#contacts__page > section.section__contacts > div.container > div > div.col-sm-7 > div > p,
		#contacts__page .section__contacts .contacts__info .contacts_info__title{
			color: #1F7A7A !important;
		}

		#content_contact1_btnSubmit_CD {
			color: #000;
		}

		.owl-theme .owl-nav .disabled {
			opacity: 1;
			cursor: not-allowed;
		}
		
		#wedding__carousel > div.owl-stage-outer > div > div.owl-item.active > div > div > div > * {
			color: #4F4F4F;
		}

		#about__page a {
			color: blue;
		}

		#ciirusBody section.section__home {
			height: auto;
		}

		#reservationform2 > p.quote-title,
		#reservationform3 > p.quote-title {
			font-size: 18px;
			font-weight: bold;
			border-bottom: 1px solid;
		}

		.black {
			color: #000!important;
		}
	`;
}