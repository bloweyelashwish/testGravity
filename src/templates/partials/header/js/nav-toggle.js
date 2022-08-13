'use strict'

const navToggle = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-menu]');
// const searchWrap = document.querySelector('[data-search-header]');
const menuLinks = [...document.querySelectorAll('.navigation__item')];
console.log(menuLinks)


export function openNavigation() {
	navToggle.addEventListener('click', (e) => {
		navToggle.classList.toggle('active');
		menuDrop();
	});
};

function menuDrop() {
	if (navToggle.classList.contains('active')) {
		navigation.classList.add('dropped');
		document.body.classList.add('overflow-hidden');
		
		menuLinks.forEach(item => {
			item.addEventListener('click', () => {
				setTimeout(closeMenu, 100)
			})
		})
	}
	else {
		closeMenu();
	};
};

function closeMenu() {
	navigation.classList.remove('dropped');
	document.body.classList.remove('overflow-hidden');
	navToggle.classList.remove('active');
}


