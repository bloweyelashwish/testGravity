import { enableSearch } from '../../templates/partials/header/js/search.js';
import { openNavigation } from '../../templates/partials/header/js/nav-toggle.js';
import { player } from '../../templates/layouts/hero/js/video-player.js';
import { form } from '../../templates/layouts/hero/js/form.js';
import { heroSlider, servicesSlider, testimonialsSlider } from '../slider.js';

document.addEventListener('DOMContentLoaded', () => {
	enableSearch();
	openNavigation();
	player();
	form();
	heroSlider();
	servicesSlider();
	testimonialsSlider();
});


