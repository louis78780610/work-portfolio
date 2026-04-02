$(function() {
	$('.burger-btn').on('click',function(){
		$('.burger-btn').toggleClass('close');
		$('.nav-wrapper').toggleClass('slide-in');
		$('body').toggleClass('noscroll');
	});
});