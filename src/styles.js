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
	`;
}