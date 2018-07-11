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

	var modal = $('.window_modal'),
		link = $('button[data-popup="true"]'),
		overlay = $('.overlay_modal'),
		orderName = $('.order-name');
	overlay.click(function () {
		modal.toggleClass('window_modal_active');
		overlay.hide();
	});
	link.on('click', function (e) {
		e.preventDefault();
		orderName.text($(this).attr('data-order'));
		overlay.show();
		modal.toggleClass('window_modal_active');
	});

});
