const navToggle = document.querySelector('.js-nav-toggle');
const navigation = document.querySelector('.js-navigation');
const { body } = document;

const openNavigation = () => {
	if (!navToggle) { 
		return 
	}

	navToggle.addEventListener('click', (e) => {
		if (navToggle.classList.contains('active')) {
			closeNavigation();
		} else {
			navToggle.classList.add('active');
			navigationDrop();
		}
	})
}

const navigationDrop = () => {
		navigation.classList.add('dropped');
		body.classList.add('overflow-hidden');

		navigation.addEventListener('click', (e) => {
			const { classList } = e.target;
			if (!classList.contains('navigation') && !classList.contains('js-search-bar-input')) {
				closeNavigation();
			}
		})
}

const closeNavigation = () => {
	navigation.classList.remove('dropped');
	body.classList.remove('overflow-hidden');
	navToggle.classList.remove('active');
};

export const initNavigation = () => {
	openNavigation();
}