import $ from 'jquery';
import slick from 'slick-carousel/slick/slick.min.js';

$(document).ready(function(){ 
	$('.slider-navigation').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		vertical: true,
		centerMode: true,
/*		centerPadding: '100px',*/
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.slider-for'
	});
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-navigation'
	});

	$('#path1').on('click', function(e) {
		$('.hidden-room').css('display', 'block');
	});
});
