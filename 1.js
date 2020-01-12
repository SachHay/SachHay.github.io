$(document).ready(function() {
	$(window).scroll(function(event) {
		vtbody = $('html,body').scrollTop();
		if(vtbody >= 65){
			$('nav.navbar.navbar-default').addClass('bg_black');
		}
		else{
			$('nav.navbar.navbar-default').removeClass('bg_black');
		}
	});

	$('.phantrang ul li a').click(function(event) {
		$(this).addClass('bg_brown');
	});


});