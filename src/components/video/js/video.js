export const initVideoPlayer = () => {
	const video = document.querySelector('.js-video');

	if (video.classList.contains('is-playing')) {
		return;
	} 

	const { src } = video.dataset;
	const videoPlaceholder = document.querySelector('.js-video-placeholder');
	const videoButton = document.querySelector('.js-video-btn');
	const videoHTML = `<iframe src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

	video.addEventListener('click', () => {
		video.classList.add('is-playing');
		video.insertAdjacentHTML('afterbegin', videoHTML);
		videoPlaceholder.classList.add('is-disabled');
		videoButton.classList.add('is-disabled');
	})
}
