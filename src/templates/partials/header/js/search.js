'use strict'

const searchBar = document.querySelector('[data-search]');
const searchInput = document.querySelector('[data-search-input]');
const searchSubmit = document.querySelector('[data-search-submit]');

export function enableSearch() { 
	searchSubmit.addEventListener('click', (e) => {
		expandSearchBar(e)
	});

}

function expandSearchBar(e) {
	if (!e.target.closest('[data-search]').classList.contains('expand')) {
		searchBar.classList.add('expand')
		searchInput.classList.add('expand')
		searchSubmit.classList.add('expand')

	} else {
		closeSearchBar()
	}
}

function closeSearchBar() {
	searchBar.classList.remove('expand')
	searchInput.classList.remove('expand')
	searchSubmit.classList.remove('expand')
}
