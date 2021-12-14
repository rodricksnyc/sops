$(document).ready(function () {

	//508 tabbing

	$("a, button, input, [tabIndex='0'], #one, .closeRadio").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabIndex='0'], #one, .closeRadio").on('focusout', function() {
		$(this).css('outline', 'none')
	})


	$('.form-signin-input input').keydown(function(event) {
		$('.btnBegin').removeClass('inactive')

	});


	$(".form-check").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $('.form-check').each(function() {
      $(this).addClass('focusClass')
    });

  }

})



	if ($(document).innerWidth() <= 767) {

		$(window).on('scroll', function() {
			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function() {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
					$('section').removeClass('active')
					$(this).addClass('active')
				}
				else {
					$(this).removeClass('active')
				}
			})

			if ($('.block10').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(1)').addClass('activated')
			}

			else {

				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			}


			if ($('.block5').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(2)').addClass('activated')
			}

			else {

				$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			}


			if ($('.block20').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(3)').addClass('activated')
			}

			else {

				$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
			}


			if ($('.block50').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(4)').addClass('activated')
			}

			else {

				$('.menu-buttons-768-list li:eq(4)').removeClass('activated')
			}


			if ($('.block0').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(4)').removeClass('activated')
			}


		})


		$('.landing-panel .form-control.access').focus(function () {
			$('html, body').animate({ scrollTop: ($('.landing-panel .form-control.access').offset().top - 40) }, 600);
			return false;
		});

	}


	$('.spanish').on('click', function() {

		$(this).removeClass('inactiveDot').addClass('activeDot')
		$('.english').removeClass('activeDot').addClass('inactiveDot')

	})



	$('.english').on('click', function() {

		$(this).removeClass('inactiveDot').addClass('activeDot')
		$('.spanish').removeClass('activeDot').addClass('inactiveDot')

	})

	$('.spanish').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13 ) {
			$(this).removeClass('inactiveDot').addClass('activeDot')
			$('.english').removeClass('activeDot').addClass('inactiveDot')

		}

	})


	$('.english').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13 ) {
			$(this).removeClass('inactiveDot').addClass('activeDot')
			$('.spanish').removeClass('activeDot').addClass('inactiveDot')

		}

	})



	function show() {
		var p = $('#AccessCode');
		p.attr('type', 'text');
	}

	function hide() {
		var p = $('#AccessCode');
		p.attr('type', 'password');
	}


	var pwShown = 0;

	var togglepwd = function() {

		if (pwShown == 0) {
			pwShown = 1;
			show();

			$("#eye").replaceWith('<i id="eye" class="fas fa-eye-slash"></i>');


			$('#access').html('Hide Password')

		} else {
			pwShown = 0;
			hide();

			$("#eye").replaceWith('<i id="eye" class="far fa-eye"></i>');
			$('#access').html('Show Password')
		}

	}

	$('#togglepwd, .togglePassword').keypress(
		togglepwd

	).click(
		togglepwd
	);



	if ($(document).innerWidth() >= 768) {

		$(window).on('scroll', function() {
			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function() {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
					$('section').removeClass('active')
					$(this).addClass('active')
				}
				else {
					$(this).removeClass('active')
				}
			})


			if ($('.block10').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(1)').addClass('activated')
				$('.menu-buttons-768-list li:eq(0)').addClass('activated')
			}

			else {
				$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
			}


			if ($('.block5').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(2)').addClass('activated')
				$('.menu-buttons-768-list li:eq(1)').addClass('activated')
			}

			else {
				$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			}

			if ($('.block20').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(3)').addClass('activated')
				// $('.menu-buttons-768-list li:eq(2)').addClass('activated')
			}

			else {
				$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')
				// $('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			}


			if ($('.block50').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(4)').addClass('activated')
				// $('.menu-buttons-768-list li:eq(2)').addClass('activated')
			}

			else {
				$('.menu-buttons-floating-list li:eq(4)').removeClass('activated')
				// $('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			}

			if ($('.block0').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
				$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')


				$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
			}

			if ($('.block50').hasClass('active')) {

				$('#slideOut').addClass('showSlideOut');

			}

			if (!$('.block50').hasClass('active') || $('.block5').hasClass('active')) {

				$('#slideOut').removeClass('showSlideOut')
			}

		})


	}




	function scrollfn(e) {
		let $target = $(e),
		offSet = e === "#Home" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');

	}

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});


	$('.menu-buttons-floating li').click(function() {
		$(this).addClass('activated')
	})



	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.collapse').on('show.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(180deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "1"
		});
	});
	$('.collapse').on('hide.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(0deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "0.4"
		});
	});



	$(window).scroll(function () {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;

	// if ($(document).innerWidth() < 1700) {
	//
	// 	if (distanceY > 900) {
	// 		$('.btnContact').css({
	// 			top: "92px"
	// 		})
	// 		$('.menu-buttons-floating').css({
	// 			opacity: '1',
	// 			visibility: 'visible'
	// 		})
	// 	}
	//
	// 	else {
	// 		$('.btnContact').css({
	// 			top: "192px"
	// 		})
	// 		$('.menu-buttons-floating').css({
	// 			opacity: '0',
	// 			visibility: 'hidden'
	// 		})
	// 	}
	//
	// }


	// if ($(document).innerWidth() > 1701) {

		if (distanceY > 1155) {
			$('.btnContact').css({
				top: "92px"
			})
			$('.menu-buttons-floating').css({
				opacity: '1',
				visibility: 'visible'
			})
		}

		else {
			$('.btnContact').css({
				top: "192px"
			})
			$('.menu-buttons-floating').css({
				opacity: '0',
				visibility: 'hidden'
			})
		}

	// }



	});



	//IE message

	var version = detectIE();

	if (version === false) {} else if (version >= 12) {} else {
		$('#myModal2').modal('show');
	}

	function detectIE() {
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {

			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {

			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {

			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		return false;
	}



})
