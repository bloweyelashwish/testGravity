const searchBar = document.querySelector('.js-search-bar');
const searchInput = document.querySelector('.js-search-bar-input');
const searchSubmit = document.querySelector('.js-search-bar-submit');
const searchElements = [searchBar, searchInput, searchSubmit];

const closeSearchBar = () => {
	searchElements.forEach(item => item.classList.remove('expand'));
}

const expandSearchBar = (e) => {
	if (!e.target.closest('.js-search-bar').classList.contains('expand')) {
		searchElements.forEach(item => item.classList.add('expand'));
	} else {
		closeSearchBar();
	}
}

export const initSearchBar = () => { 
	searchSubmit.addEventListener('click', (e) => {
		expandSearchBar(e);
	});
}