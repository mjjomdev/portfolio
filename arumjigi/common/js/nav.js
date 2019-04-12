
 $(document).ready(function() {

	  $('ul.dropdownmenu').hover(   //전체 메뉴에 오버/아웃시
		 function() { 
			$('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();});
			//전체 서브메뉴를 열어라
	        $('.headerbot').animate({height:320},'fast').clearQueue();
		 },
		function() {
            $('ul.dropdownmenu li.menu ul').fadeOut('fast');
			//천체 서브메뉴를 닫아라
		    $('.headerbot').animate({height:160},'fast').clearQueue();
	   });
	   
	   $('ul.dropdownmenu li.menu').hover(
		 function() { 
              $('a.depth1', this).animate({top:-32},'fast').clearQueue();
		 },
		function() {
             $('a.depth1', this).animate({top:0},'fast').clearQueue();
	   });
	   
	   //탭키 처리 코드
	   $('ul.dropdownmenu li.menu .depth1').bind('focus', function () {        
                    $('ul.dropdownmenu li.menu ul').slideDown('fast');
                   $('.headerbot').animate({height:320},'fast').clearQueue();
          });

         $('ul.dropdownmenu li.m6 li:last').find('a').bind('blur', function () {        
                  $('ul.dropdownmenu li.menu ul').slideUp('fast');
                   $('.headerbot').animate({height:32},'fast').clearQueue();
         });
	   
  });
  
  
  
  
  

