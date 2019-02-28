$(document).ready(() => {

	$('.navbar-nav a').on('click', (e) => {
		e.preventDefault();
		let target = e.target.getAttribute('href');
		$('html, body').animate({ scrollTop: $(target).offset().top - ($(target).offset().top * 0.05) });
		window.location = target;
	});

	$('#block-portfolio ul a').on('click', (e) => {
		e.preventDefault();
		$('#portfolio-modal').show().animate({right: '10%'});
		switch (e.target.id) {
			case 'geometriadizaina':
				$('#portfolio-modal h2').text('Лэндинг для дизайнеров интерьера "ГЕОМЕТРИЯ ДИЗАЙНА"');
				$('#design').attr('href', 'https://yadi.sk/d/DLXXxglkN_Bjjw');
				$('#code').attr('href', 'https://github.com/CraXviL/geometriadizaina.ru');
				$('#webPage').attr('href', 'http://geometriadizaina.ru');
				break;
			case 'prazdnikmne':
				$('#portfolio-modal h2').text('Многостраничный сайт "КОРПОРАЦИЯ ПРАЗДНИКОВ АНАСТАСИИ БАЖЕНОВОЙ"');
				$('#design').attr('href', 'https://yadi.sk/d/oo_e28SAj-_fTg');
				$('#code').attr('href', 'https://github.com/CraXviL/prazdnikmne.ru');
				$('#webPage').attr('href', 'https://prazdnikmne.ru');
				break;
			case 'plita':
				$('#portfolio-modal h2').text('Лэндинг ресторана "PLITA"');
				$('#design').attr('href', 'https://yadi.sk/d/jA22yCzpNXJ1Tg');
				$('#code').attr('href', 'https://github.com/CraXviL/plita');
				$('#webPage').attr('href', 'https://plitarest.ru');
				break;
		}
	});

	$('input[name="name"]').on('input', (e) => {
		validate(e, /^[ а-яё]+$/gi);
	});
	$('input[name="phone"]').on('input', (e) => {
		validate(e, /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/);
	});
	$('input[name="email"]').on('input', (e) => {
		validate(e, /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);
	});

	function validate(e, regExp) {
		if (!regExp.test(e.target.value.trim())) {
			$(e.target).addClass('error');
		} else {
			$(e.target).removeClass('error');
		}
	}

	$('form').submit((e) => {
		e.preventDefault();
		$.ajax({
			url: 'sendmail.php',
			type: 'POST',
			data: $('form').serialize(),
			success: function () {
				console.log('Запрос отправлен');
			},
			error: function () {
				console.log('Возникла ошибка при отправке');
			}
		});
		$('form').fadeOut();
		window.setTimeout(() => {
			$('form').html('<h2>Отправлено!</h2><p>Я с Вами обязательно свяжусь</p>');
			$('form').fadeIn();
		}, 500);
	});

});
