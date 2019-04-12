// JavaScript Document

//*** 자바스크립트 경로 기준은 html 이 저장된 위치

$(document).ready(function(){
  var cnt=3; //탭메뉴 개수
  $('.sns .sns_con:eq(0)').show();  //contlist 중 가장 첫번째를 보여라
  $('.sns .tab1').css('background','url(images/sns1h.jpg)'); //첫번째 버튼 활성화
  
  $('.sns .tab').each(function (index) { //탭메뉴 각각에 넘버링, index에 번호 저장(0,1,2)
    $(this).click(function(){  	//각각의 메뉴버튼을 클릭하면
	  $(".sns .sns_con").hide();  //모든 contlist 내용을 안보이게 해라
	  $(".sns .sns_con:eq("+index+")").show(); //클릭한 해당버튼의 contlist 내용만 열어라
	  for(var i=1;i<=cnt;i++){  //i=1,2,3
           $('.tab'+i).css('background','url(images/sns'+i+'.jpg)'); //모든 버튼을 비활성화 시켜라
      }
      $(this).css('background','url(images/sns'+(index+1)+'h.jpg)');  //클릭한 해당 버튼만 활성화시켜라
   });
  });
});