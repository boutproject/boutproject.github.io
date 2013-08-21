$(function() {
	var nav = $("#nav-container"), pos = nav.offset();
	$(window).scroll(function() { 
		if($(this).scrollTop() > (pos.top + 10) &&
			nav.css('position') == 'static') { 
			nav.addClass('fixed');  
		} else if($(this).scrollTop() <= pos.top &&
			nav.hasClass('fixed')) { 
			nav.removeClass('fixed'); 
		}
	})
});
