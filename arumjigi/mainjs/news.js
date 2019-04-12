// JavaScript Document

   $(document).ready(function () {
	     var timeonoff;  // 타이머
         var pcnt=1;
		 
	 $('.news .rightbtn').click(function () {
		 pcnt++;
		 if(pcnt>3){
		    pcnt=1;
		 }
		 $('.num1 strong').text(pcnt);
		 
	     clearInterval(timeonoff );	
         $('.news ul').first().appendTo('.news .news_con');
         });


         $('.news .leftbtn').click(function () {
		   pcnt--;	
		   if(pcnt<1){
		    pcnt=3;
		   }
		   $('.num1 strong').text(pcnt); 
		
			 
	     clearInterval(timeonoff );	
             $('.news ul').last().prependTo('.news .news_con');  //prependTo 가장 위로 보낸다
         });
	
	 
   });