$(function () {


	$('.button-up').click(function(){
		$('body').animate({scrollTop : 0}, 500);
	});

	// Показ/скрытие кнопки вверх
	$(window).scroll(function(){
		// Узнаем высоту шапки и записываем в переменную
		var headerHeight = $('.page-header').height();

		// Пишем условие, когда скролл достиг отметки большей, чем высоа шапки - показываем кнопку, меньше - если нет - скрываем 
		if($('body').scrollTop() > headerHeight) {
			$('.button-up').show();
		} else {
			$('.button-up').hide();
		}
	});
})