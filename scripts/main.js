/* Get The Document Ready! */
$(document).ready(function(event){
	// Slick Slider
	$('.slideshow').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		autoplay: true,
		fade: true,
		cssEase: 'linear'
	});
});
	$('.toggle-menu').click(function() {
    $('#menu').slideToggle();
});
