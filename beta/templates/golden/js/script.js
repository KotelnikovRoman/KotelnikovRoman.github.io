$('.button_menu_link').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('btn_active');
	if($('.menu').is(':visible')) {
		$('.menu').slideToggle('hide');
	}
	else {
		$('.menu').slideToggle('slow');
	}
});