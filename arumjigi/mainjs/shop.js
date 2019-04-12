// JavaScript Document

   $(document).ready(function () {
	     var timeonoff;  // 타이머
         var pcnt=1;
		 
	 $('.shop .rightbtn').click(function () {
		 pcnt++;
		 if(pcnt>3){
		    pcnt=1;
		 }
		 $('.num2 strong').text(pcnt);
		 
	     clearInterval(timeonoff );	
         $('.shop ul').first().appendTo('.shop .shop_con');
         });


         $('.shop .leftbtn').click(function () {
		   pcnt--;	
		   if(pcnt<1){
		    pcnt=3;
		   }
		   $('.num2 strong').text(pcnt); 
		
			 
	     clearInterval(timeonoff );	
             $('.shop ul').last().prependTo('.shop .shop_con');  //prependTo 가장 위로 보낸다
         });
	
	 
   });