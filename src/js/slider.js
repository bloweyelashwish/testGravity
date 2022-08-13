export function heroSlider() {
	$('.slider-hero-js').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	});
}

export function servicesSlider() {
	$('.slider-services-js').slick({
		infinite: false,
		arrows: true,
		slidesToShow: 1.3,
		slidesToScroll: 1,		
		prevArrow: $('.js-prev-services'),
      nextArrow: $('.js-next-services'),
		cssEase: 'ease-out',
  		speed: 650,
		  responsive: [
			{
			  breakpoint: 600,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 599,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
			  }
			}
		 ]
	});
}

export function testimonialsSlider() {
	$('.slider-testimonials-js').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,		
		prevArrow: $('.js-prev-testimonials'),
      nextArrow: $('.js-next-testimonials'),
		cssEase: 'linear',
  		speed: 800,
		autoplay: true,
		autoplaySpeed: 3000,
		draggable: false,  
	});
}