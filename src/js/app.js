import { initSearchBar } from '../components/search-bar/js/search-bar.js';
import { initNavigation } from '../components/navigation/js/navigation.js';
import { initVideoPlayer } from '../components/video/js/video.js';
import { initForm } from '../components/form/js/form.js';
import { initSliders } from '../components/slider/js/slider.js';

document.addEventListener('DOMContentLoaded', () => {
	initSearchBar();
	initNavigation();
	initVideoPlayer();
	initForm();
	initSliders();
});



