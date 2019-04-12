$(document).ready(function(){
	$(".layer-popup").hide();
	$("#pop-step-1").show();

	// header 내 닫기 버튼 클릭(실제 적용할 때에는 허쉬 이벤트 페이지로 이동 필요)
	$(".pop-header .btn-close").click(function(){
		$(".layer-popup").hide();
	});

		
	// step-1 정보입력 - 개인정보 취급방법 팝업 열기
	$(".pop-policy").hide();
	$(".pop-body .btn-policy a").click(function(){
		$("#pop-step-1 .layer-bg").fadeIn();
		$(".pop-policy").fadeIn();
		$('html').scrollTop(0);
	});
	
	// step-1 정보입력 - 개인정보 취급방법 팝업 닫기
	$(".pop-policy .pop-header .btn-close-policy").click(function(){
		$("#pop-step-1 .layer-bg").fadeOut();
		$(".pop-policy").fadeOut();
		$('html').scrollTop(0);
	});
	$(".pop-policy .pop-footer .btn-close a").click(function(){
		$("#pop-step-1 .layer-bg").fadeOut();
		$(".pop-policy").fadeOut();
		$('html').scrollTop(0);
	});
	
	// step-1 정보입력 - 입력완료 버튼 클릭
	$("#pop-step-1 .btn-submit a").click(function(){
		$("#pop-step-1").hide();
		$("#pop-step-2").show();
		$('html').scrollTop(0);
	});
			
	//step-2 게임하기 - PLAY & STOP 버튼 텍스트 교체
	var count=0;
	$('.btn-play').click(function(){
		count++;		
		$(this).toggleClass('btn-stop');
		if(count%2==0){
			$(".pop-dice-result").delay(300).fadeIn();
			$(".layer-bg").delay(250).fadeIn();
		}
		$('.dice-area').toggleClass('dice-active');
				
		//임의 적용- 주사위 결과값 i(임의)에 따라 background-image 경로 수정 필요 dice1.png ~ dice6.png
		$('.dice-area').css({'background-image':'url(../img/game/dice'+i+'.png) 0 0 no-repeat'})
	})	

	// step-2 게임하기 - 게임방법보기 버튼 클릭
	$("#pop-step-2 .btn-view a").click(function(){
		$(".pop-rule").fadeIn();
		$("#pop-step-2 .layer-bg").fadeIn();
		$('html').scrollTop(0);
	});
		
	// 게임방법 팝업 닫기
	$(".pop-rule .pop-footer .btn-close a").click(function(){
		$(".pop-rule").fadeOut();
		$("#pop-step-2 .layer-bg").fadeOut();
		$('html').scrollTop(0);
	});
	
	// 주사위결과 팝업 닫기
	$(".pop-dice-result .btn-pop a").click(function(){
		$(".pop-dice-result").hide();
		$("#pop-step-2 .layer-bg").fadeOut();
		$('html').scrollTop(0);
		
		//최종 계산값에 따라 active된 위치의 img 경로 수정 필요 off -> on
		$(".game-board li.active").find("img").each(function(index){			
			$(this).attr('src',$(this).attr('src').replace("off.png", "on.png"));
		});
	});
	
	// step-3 게임결과 팝업 보기(테스트)
	$(".btn-test a").click(function(){
		$("#pop-step-3").show();
		$("#pop-step-2").hide();
		$('html').scrollTop(0);
	});

	// step-3 게임결과 - 재도전하기 팝업 보기
	$(".btn-retry a").click(function(){
		$("#pop-step-2").show();
		$("#pop-step-3").hide();
		$('html').scrollTop(0);
	});

	// step-4 공유하기 팝업 보기
	$(".btn-share a").click(function(){
		$("#pop-step-4").show();
		$("#pop-step-3").hide();
		$('html').scrollTop(0);
	});
	
	// step-4 공유하기 - 참여완료 버튼 클릭
	$("#pop-step-4 .btn-submit a").click(function(){
		$("#pop-step-4").hide();
	});	
});