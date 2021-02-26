import initGlobal from './global';
import home from './home';
import wedding_and_events from './weddings-and-events';
import attractions from './attractions';
import blog from './blog';
import styles from './styles';
import contact from './contact';
import map from './map';
import faq from './faq';

document.addEventListener('DOMContentLoaded', (event) => {
	styles();
	initGlobal();
	home();
	wedding_and_events();
	attractions();
	blog();
	contact();
	map();
	faq();
});