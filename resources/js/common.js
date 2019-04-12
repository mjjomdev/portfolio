// JavaScript Document
function scrollHandler(){
	//GNB
	var scrollTop = $(window).scrollTop();
	var navbarHeight = $('header').outerHeight();
	if (scrollTop > navbarHeight){
		$('header').addClass("fixed");
	}else{
		$('header').removeClass("fixed");
	};
	
	//Contents
	var winBottom = $(window).scrollTop()+$(window).height();
	$('.work-list li').each(function(){
        var wlist = $(this);
        var wlistHalf = wlist.position().top + wlist.outerHeight()/2
        
        if (wlistHalf < winBottom){
            wlist.animate({'opacity':'1'},1500);
        }
    })
};

$(window).on('scroll',scrollHandler);
scrollHandler();