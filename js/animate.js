
$(document).ready(function() {
	$('.smart-links li')
	.removeClass('flipInY')
	.removeClass('flipInX')
	.hover(function() {
		$(this).addClass('flipInY');
	});
});