"use strict";

const burger = document.querySelector(".header__burger"),
	menu = document.querySelector(".header__menu"),
	body = document.querySelector("body"),
	header = document.querySelector(".header");

burger.addEventListener('click', () => {
	menu.classList.toggle('_open');
	burger.classList.toggle('_active');
	body.classList.toggle('_lock');
})

window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		header.style.background = 'linear-gradient(to bottom, rgba(242,242,242,1) 20%,  rgba(242,242,242,0.8))';
		header.style.padding = '15px 0';
	} else {
		header.style.background = 'transparent';
		header.style.padding = '30px 0';
	}
})

const swiper = new Swiper('.testimonials__slider', {
	loop: true,

	spaceBetween: 15,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},

	navigation: {
		nextEl: '.testimonials__slider-button-next',
		prevEl: '.testimonials__slider-button-prev',
	},

});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {

	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 3;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300)
}