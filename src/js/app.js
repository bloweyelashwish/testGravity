import { openNavigation, enableSearch } from '../components/header/js/header.js';
import { player } from '../components/video/js/video.js';
import { form } from '../components/form/js/form.js';
import { heroSlider, servicesSlider, testimonialsSlider } from '../components/slider/js/slider.js';

document.addEventListener('DOMContentLoaded', () => {
	enableSearch();
	openNavigation();
	player();
	form();
	heroSlider();
	servicesSlider();
	testimonialsSlider();
});



