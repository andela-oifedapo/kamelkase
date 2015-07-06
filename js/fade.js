$(window).load(function () {
	var images = $('img.fade');
	
	images.each(function (n) {
		$(this).delay(n * 5000).fadeIn();
	});
});