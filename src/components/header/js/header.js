'use strict'

const navToggle = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-menu]');
const menuLinks = [...document.querySelectorAll('.navigation__item')];
const searchBar = document.querySelector('[data-search]');
const searchInput = document.querySelector('[data-search-input]');
const searchSubmit = document.querySelector('[data-search-submit]');

function openNavigation() {
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
				setTimeout(closeMenu, 100);
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
};

function enableSearch() { 
	searchSubmit.addEventListener('click', (e) => {
		expandSearchBar(e);
	});
};

function expandSearchBar(e) {
	if (!e.target.closest('[data-search]').classList.contains('expand')) {
		searchBar.classList.add('expand');
		searchInput.classList.add('expand');
		searchSubmit.classList.add('expand');

	} else {
		closeSearchBar();
	}
};

function closeSearchBar() {
	searchBar.classList.remove('expand');
	searchInput.classList.remove('expand');
	searchSubmit.classList.remove('expand');
};

export { openNavigation, enableSearch };

