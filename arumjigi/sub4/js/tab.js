// JavaScript Document

$(document).ready(function(){
	var cnt=2; //탭메뉴 개수
	$('.spon_con .contlist:eq(0)').show();  //contlist 중 가장 첫번째를 보여라
	$('.spon_con .spon1').css('background','url(images/content2/spon1_on.jpg)'); //첫번째 버튼 활성화
	
	$('.spon_con .spon').each(function (index) { //탭메뉴 각각에 넘버링, index에 번호 저장(0,1,2)
		$(this).click(function(){  	//각각의 메뉴버튼을 클릭하면
			$(".spon_con .contlist").hide();  //모든 contlist 내용을 안보이게 해라
			$(".spon_con .contlist:eq("+index+")").show(); //클릭한 해당버튼의 contlist 내용만 열어라
			for(var i=1;i<=cnt;i++){  
				 $('.spon'+i).css('background','url(images/content2/spon'+i+'.jpg)'); //모든 버튼을 비활성화 시켜라
			}
			$(this).css('background','url(images/content2/spon'+(index+1)+'_on.jpg)');  //클릭한 해당 버튼만 활성화시켜라
	   });
	});
});