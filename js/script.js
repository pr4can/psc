$(document).ready(function() {

	$('.doctors_slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true, 
		arrows: true,
		prevArrow: $('#doctor_prev'),
		nextArrow: $('#doctor_next'),
		focusOnSelect: false,
		autoplay: true,
  		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.mini-prices_slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true, 
		arrows: true,
		prevArrow: $('#mini-prices_prev'),
		nextArrow: $('#mini-prices_next'),
		focusOnSelect: false,
		autoplay: true,
  		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$(".price_accordion-expand").on("click", function() {
		var parent = $(this).parent().parent();
		if ($(parent).attr("data-expanded") == "true") {
			$(parent).attr("data-expanded", "false");
			$(this).removeClass("open");
			$(this).find("span").text("Развернуть");
		}
		else {
			$(parent).attr("data-expanded", "true");
			$(this).addClass("open");
			$(this).find("span").text("Свернуть");
		}
	});

	$(".header-bottom_burger").on("click", function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".header-bottom_container").removeClass("active");
		}
		else {
			$(this).addClass("active");
			$(".header-bottom_container").addClass("active");
		}
	});

	$("#map").on("click", function() {
		$(this).find("iframe").removeAttr("style");
		$(".map_title").remove();
	});

	$("#map").on("mousemove", function(event) {
		$(".map_title").css("display", "block");
		if(event.offsetY > 10) $(".map_title").css("top", event.offsetY + 20 + 'px');
        if(event.offsetX > 10) $(".map_title").css("left", event.offsetX + 20 + 'px');
	});

	$("#map").on("mouseleave", function() {
		$(".map_title").css("display", "none");
	});


});