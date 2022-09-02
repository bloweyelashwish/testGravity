const navToggle = document.querySelector('.js-nav-toggle');
const navigation = document.querySelector('.js-navigation');
const { body } = document;

const openNavigation = () => {
	if (!navToggle) { 
		return 
	}

	navToggle.addEventListener('click', (e) => {
		navToggle.classList.toggle('active');
		menuDrop();
	})
}

const menuDrop = () => {
	if (navToggle.classList.contains('active')) {
		navigation.classList.add('dropped');
		body.classList.add('overflow-hidden');
	}
	else {
		closeMenu();
	}
}

const closeMenu = () => {
	navigation.classList.remove('dropped');
	body.classList.remove('overflow-hidden');
	navToggle.classList.remove('active');
};

export const initMenu = () => {
	openNavigation();
}