//--- Menu Fixed
$(document).ready(function(){
	let altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	})
});
//<!-- Slider -->
window.addEventListener('load',function (){
	new Glider(document.querySelector('.slider__list'), {
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: true,
		dots: '.slider__indicadores',
		arrows: {
			prev: '.slider__anterior',
			next: '.slider__siguiente'
		},

	});
});
