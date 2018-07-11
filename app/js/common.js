$(function() {

	$('.count').each(function () {
		$(this).prop('Counter', 0).delay(2000).animate({
			Counter: $(this).text()
		},
		{
			duration: 4000,
			easing: 'swing',
			step: function (n) {
				$(this).text(Math.ceil(n));
			}
		});
	});

	$('.slider').bxSlider();

	$('.slider-top').bxSlider();

	$('.bx-wrapper .bx-controls-direction .bx-prev').text('<');
	$('.bx-wrapper .bx-controls-direction .bx-next').text('>');

	new WOW().init();

});
