$(document).ready(function() {

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