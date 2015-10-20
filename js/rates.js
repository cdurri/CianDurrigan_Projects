$(document).ready(function() {

	$(".vehicle_para_city").hide();

	$(".vehicle_para_tripper").hide();

	$(".vehicle_para_van").hide();

	$("#cityrange").click(function() {


		$(".vehicle_para_city").slideDown("slow");

	});

	$("#tripperrange").click(function() {


		$(".vehicle_para_tripper").slideDown("slow");

	});

	$("#vanrange").click(function() {


		$(".vehicle_para_van").slideDown("slow");

	});


});