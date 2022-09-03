import $ from 'jquery';
import slick from 'slick-carousel';
console.log(slick);
const sliders = [...document.querySelectorAll('.js-slider')];

export const initSliders = () => {
	console.log(sliders)
	sliders.forEach(slider => {
		let { options } = slider.dataset;
		console.log(options);
		console.log(slider);
		options = JSON.parse(options);
		if (options) {
			$(slider).slick(options)
		}
	})
}
