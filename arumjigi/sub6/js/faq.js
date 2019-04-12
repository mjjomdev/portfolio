// JavaScript Document

$(document).ready(function () {
	var faq = $('.contentArea .faq_con'); 
	
	$('.contentArea .faq_con .trigger').click(function(){  //각각의 질문을 클릭하면
		var myfaq = $(this).parents('.faq_con');   //클릭한 질문의 부모태그중 .article을 찾아서 myArticle에 담아라 == 클릭한 li
				
		if(myfaq.hasClass('hide')){   //클릭한 li가 hide라는 class를 갖고있느냐(닫혀있느냐)
			faq.find('.answer').slideUp(100); //전체 li의 자식인 답변(.a)을 모두 다 닫아라
			faq.removeClass('show').addClass('hide');   //전체 li의 class를 모두 hide로 바꿔라
			myfaq.removeClass('hide').addClass('show');  //class를 show로 바꿔라
			myfaq.find('.answer').slideDown(100);  //클릭한 li의 답변(.a)만 열어라				
		 } else {  //클릭한 li가 show라는 class를 갖고있느냐(열려있느냐)
		   myfaq.removeClass('show').addClass('hide');  //class를 hide로 바꿔라
		   myfaq.find('.answer').slideUp(100);   //클릭한 li의 답변(.a)을 닫아라		  
		    
		}  
  });      
		
  //모두 여닫기 추가
  $('.all').toggle(function(){ 
	    faq.find('.answer').slideDown(100);
	    faq.removeClass('hide').addClass('show');
		$(this).text('전체닫기');
		$(this).css('background','url(images/content2/close.png) right center no-repeat');
	},function(){ 
	    faq.find('.answer').slideUp(100);
	    faq.removeClass('show').addClass('hide');
		$(this).text('전체열기');
		$(this).css('background','url(images/content2/open.png) right center no-repeat');
	});
  
});