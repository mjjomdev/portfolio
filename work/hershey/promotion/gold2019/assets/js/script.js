$(document).ready(function(){
	$(".layer-popup").hide();
	$("#pop-step-1").show();

	//닫기 버튼 클릭(실제 적용할 때에는 허쉬 이벤트 페이지로 이동 필요)
	$(".btn-close").click(function(){
		$(".layer-popup").hide();
		window.location.href = 'https://www.thehersheycompany.com/ko_kr/events.html'
	});


	// step1 영상시청 - 다음 버튼 클릭
	$("#pop-step-1 .btn-pop").click(function(){
		$("#pop-step-1").hide();
		$("#pop-step-2").show();
		$('html').scrollTop(0);
	});
			
	// step2 정보입력 - 개인정보 취급방법 팝업 열기
	$(".pop-policy").hide();
	$(".pop-body .btn-policy").click(function(){
		$("#pop-step-2 .layer-bg").fadeIn();
		$(".pop-policy").show();
		$('html').scrollTop(0);
	});
	
	// step2 정보입력 - 개인정보 취급방법 팝업 닫기
	$(".pop-policy .btn-close-policy").click(function(){
		$("#pop-step-2 .layer-bg").fadeOut();
		$(".pop-policy").fadeOut();
		$('html').scrollTop(0);
	});
	$(".pop-policy .btn-pop").click(function(){
		$("#pop-step-2 .layer-bg").fadeOut();
		$(".pop-policy").hide();
		$('html').scrollTop(0);
	});
	
	// step2 정보입력 - 응모완료 버튼 클릭
	$("#pop-step-2 .btn-pop").click(function(){
		$("#pop-step-2").hide();
		$("#pop-step-3").show();
		$('html').scrollTop(0);
	});
	
	// step3 공유하기 - 닫기 버튼 클릭
	$("#pop-step-3 .btn-close").click(function(){
		$("#pop-step-3").hide();
		window.location.href = 'https://www.thehersheycompany.com/ko_kr/events.html'
	});	
	
	// 당첨자 안내 팝업 - 닫기 버튼 클릭
	$(".pop-win").show();
	$(".pop-win .btn-close").click(function(){
		$(".pop-win").hide();
		window.location.href = 'https://www.thehersheycompany.com/ko_kr/events.html'
	});	
	
});