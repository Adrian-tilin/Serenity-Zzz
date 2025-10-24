var swiper = new Swiper(".swiper", {
	effect: "coverflow",
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "1",
	coverflowEffect: {
		rotate: 50, 
		stretch: 0, 
		depth: 100, 
		modifier: 1, 
		slideShadows: true 
	},
	pagination: {
		el: ".swiper-pagination"
	},
	breakpoints: {
		
		320: {
			slidesPerView: 1.5
		},
		
		580: {
			slidesPerView: 2
		},
		
		767: {
			slidesPerView: 3
		},
		992: {
			slidesPerView: 3.5
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4.5
		}
	}
});