const navToggle = document.querySelector('.js-nav-toggle');
const navigation = document.querySelector('.js-navigation');
const { body } = document;

const openNavigation = () => {
	if (!navToggle) { 
		return 
	}

	navToggle.addEventListener('click', (e) => {
		navToggle.classList.toggle('active');
		navigationDrop();
	})
}

const navigationDrop = () => {
	if (navToggle.classList.contains('active')) {
		navigation.classList.add('dropped');
		body.classList.add('overflow-hidden');
	}
	else {
		closeNavigation();
	}
}

const closeNavigation = () => {
	navigation.classList.remove('dropped');
	body.classList.remove('overflow-hidden');
	navToggle.classList.remove('active');
};

export const initNavigation = () => {
	openNavigation();
}