$(function() {

	var current = new Date();
	var start = new Date();
	start.setHours(18)
	start.setMinutes(00);

	console.log(current);
	console.log(start);

	var clock = $('.countdown').FlipClock({
		countdown: true,
		autoStart: false,
	});    

	console.log(((start-current)/1000));

	clock.setTime(((start-current)/1000));
	clock.start();

});


