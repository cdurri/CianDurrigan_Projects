$(document).ready(function() {

	$(".vehicle_para_city").hide();

	$(".vehicle_para_tripper").hide();

	$(".vehicle_para_van").hide();

	$("#cityrange").click(function() {


		$(".vehicle_para_city").slideDown("slow");
		$("#city_select").css("margin-top", "57px");

	});

	$("#tripperrange").click(function() {


		$(".vehicle_para_tripper").slideDown("slow");

	});

	$("#vanrange").click(function() {


		$(".vehicle_para_van").slideDown("slow");

	});

	$("#description_city").mouseenter(function() {

		$(".vehicle_para_tripper").fadeTo(1000, 0.2);
		$(".vehicle_para_van").fadeTo(1000, 0.2);


	}).mouseleave(function() {

		$(".vehicle_para_tripper").fadeTo(1000, 1);
		$(".vehicle_para_van").fadeTo(1000, 1);

	});

	$("#description_tripper").mouseenter(function() {

		$(".vehicle_para_city").fadeTo(1000, 0.2);
		$(".vehicle_para_van").fadeTo(1000, 0.2);


	}).mouseleave(function() {

		$(".vehicle_para_city").fadeTo(1000, 1);
		$(".vehicle_para_van").fadeTo(1000, 1);

	});

	$("#description_van").mouseenter(function() {

		$(".vehicle_para_tripper").fadeTo(1000, 0.2);
		$(".vehicle_para_city").fadeTo(1000, 0.2);


	}).mouseleave(function() {

		$(".vehicle_para_tripper").fadeTo(1000, 1);
		$(".vehicle_para_city").fadeTo(1000, 1);

	});

	$("#city_select").click(function() {

		$("#city_range").css("background-color", "#f08073");
		$("#tripper_range").css("background-color", "inherit");
		$("#van_range").css("background-color", "inherit");

	});

	$("#tripper_select").click(function() {

		$("#tripper_range").css("background-color", "#f08073");
		$("#city_range").css("background-color", "inherit");
		$("#van_range").css("background-color", "inherit");


	});

	$("#van_select").click(function() {

		$("#van_range").css("background-color", "#f08073");
		$("#tripper_range").css("background-color", "inherit");
		$("#city_range").css("background-color", "inherit");

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