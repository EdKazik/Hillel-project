(function() {
	const headerBurgerOpen = document.querySelector('.header__burger-menu');
	const headerNavigation = document.querySelector('.header__nav');
	const headerBurgerClose = document.querySelector('.header__nav-close');

	headerBurgerOpen.addEventListener('click', event => {
		headerNavigation.classList.add('active')
	});

	headerBurgerClose.addEventListener('click', event => {
		headerNavigation.classList.remove('active')
	});
})();

(function() {
	const tabItems = document.querySelectorAll('.experience__tab-link');
	const tabContent = document.querySelectorAll('.tab__content-item');

	tabItems.forEach((tab, index) => {
		tab.addEventListener('click', (event) => {
			event.preventDefault();

			tabContent.forEach(content => {
				content.classList.remove('active');
			});

			tabItems.forEach(tab => {
				tab.classList.remove('active');
			});

			tabContent[index].classList.add('active');
			tabItems[index].classList.add('active');
		})
	})
})();


const swiper = new Swiper('.swiper', {
  loop: true,
	spaceBetween: 30,
	grabCursor: true,
	speed: 900,
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
});

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
// 	delay: .6,
// 	transition: 'cubic-bezier(0,0,0,1)'
// });


(function() {
	const headerBurgerOpen = document.querySelector('.header__publications-burger-menu');
	const headerNavigation = document.querySelector('.header__publications-navi');
	const headerBurgerClose = document.querySelector('.header__publications-navi-close');

	headerBurgerOpen.addEventListener('click', event => {
		headerNavigation.classList.add('active')
	});

	headerBurgerClose.addEventListener('click', event => {
		headerNavigation.classList.remove('active')
	});
})();
