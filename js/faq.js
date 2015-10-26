$(document).ready(function() {


	$(".answer").hide();

	$("#general_1").click(function() {

		$(this).siblings("#answer_1").slideDown(1500);
		$(this).siblings(".answer").not("#answer_1").slideUp(1500);
		
	});

	$("#general_2").click(function() {

		$(this).siblings("#answer_2").slideDown(1500);
		$(this).siblings(".answer").not("#answer_2").slideUp(1500);
		
	});

	$("#general_3").click(function() {

		$(this).siblings("#answer_3").slideDown(1500);
		$(this).siblings(".answer").not("#answer_3").slideUp(1500);

	});

	$("#general_4").click(function() {

		$(this).siblings("#answer_4").slideDown(1500);
		$(this).siblings(".answer").not("#answer_4").slideUp(1500);
	
	});

	$("#general_5").click(function() {

		$(this).siblings("#answer_5").slideDown(1500);
		$(this).siblings(".answer").not("#answer_5").slideUp(1500);
		
	});

	$("#facebook").mouseenter(function() {

		$(this).css("width", "80");
		$(this).css("height", "80");

	}).mouseleave(function() {

		$(this).css("width", "60");
		$(this).css("height", "60");

	});

	$("#linkedin").mouseenter(function() {

		$(this).css("width", "80");
		$(this).css("height", "80");

	}).mouseleave(function() {

		$(this).css("width", "60");
		$(this).css("height", "60");

	});

	$("#twitter").mouseenter(function() {

		$(this).css("width", "80");
		$(this).css("height", "80");

	}).mouseleave(function() {

		$(this).css("width", "60");
		$(this).css("height", "60");

	});

	$("#facebook").click(function() {

		var url = 'http://www.facebook.com';
		window.open(url);

	});

	$("#linkedin").click(function() {

		var url = 'http://www.linkedin.com';
		window.open(url);

	});

	$("#twitter").click(function() {

		var url = 'http://www.twitter.com';
		window.open(url);

	});


	$("#menu").click(function() {

		$(".hide-menu").slideToggle(1500);

	});

});

