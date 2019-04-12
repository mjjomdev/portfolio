// JavaScript Document


$(document).ready(function(){
  var cnt=8; //탭메뉴 개수
  $('.nletterArea .nletter:eq(0)').show();  //nletter 중 가장 첫번째를 보여라

  
  $('.scrollArea .tab').each(function (index) { //탭메뉴 각각에 넘버링, index에 번호 저장(0,1,2)
    if(index>=8){
		index-=8;
	};
		
	$(this).hover(function(){
		$(this).css('background','url(images/content2/nl_vol'+(index+1)+'h.jpg)');
	},function(){
		$(this).css('background','url(images/content2/nl_vol'+(index+1)+'.jpg)');
	});
	
	$(this).click(function(){  	//각각의 메뉴버튼을 클릭하면
	  $(".nletterArea .nletter").hide();  //모든 nletter 내용을 안보이게 해라
	   	$(".nletterArea .nletter:eq("+index+")").show(); //클릭한 해당버튼의 nletter 내용만 열어라
   });
  });
});