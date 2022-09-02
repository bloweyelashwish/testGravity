const video = document.querySelector('[data-video]');
const videoSrc = video.dataset.src;
const videoPlaceholder = document.querySelector('.video__placeholder');
const videoBtn = document.querySelector('.video__btn');

function player() {
	video.addEventListener('click', () => {

		if (video.classList.contains('is-playing')) return;

		video.classList.add('is-playing');
		video.insertAdjacentHTML('afterbegin', `<iframe src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
		videoPlaceholder.classList.add('is-disabled');
		videoBtn.classList.add('is-disabled');
	})
}

export { player };