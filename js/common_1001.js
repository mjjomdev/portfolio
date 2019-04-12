////////// GNB web
function gnb(){
	dp1 = $('#gnb > ul > li > a.dp1');
	
	dp1.on('mouseenter', function(){
		psX = $(this).position();
		dp2H = $(this).next('.dp2').find('ul').innerHeight();
		$(this).parents('#gnb').find('a').removeClass('on');
		$(this).addClass('on');
		$(this).next('.dp2').css('left',psX.left+'px');

		dp1.next('.dp2').stop(true,true).animate({
			'height':'0px'
		},300,'easeOutExpo');

		$(this).next('.dp2').stop(true,true).animate({
			'height':dp2H
		},400,'easeOutExpo');
	});

	$('#gnb > ul > li > .dp2').on('mouseleave',function(){
		$(this).animate({
			'height':'0px'
		},300,'easeOutExpo');
	});
}

////////// GNB mobile
function gnbMobile(){
	var gnbMobile_wrap = $('.gnb_mobile_wrap'),
		gnbMobile_dp1 = $(gnbMobile_wrap).find('.gnb_mobile_content >ul >li >a.dp1');


	$('#gnb_mobile .mbiBtn').on('click',function(){//GNB모바일 활성화
		if($(this).hasClass('on'))		{
			$(this).removeClass('on');
			$(gnbMobile_wrap).hide();
			$(gnbMobile_wrap).find('.dim').remove();
		}else{
			$(this).addClass('on');
			$(gnbMobile_wrap).show();
			$(gnbMobile_wrap).append('<div class="dim"></div>');
		}
		return false;
	})

	gnbMobile_dp1.on('click', function(){//2뎁스 슬라이딩
		var dp2Height = $(this).next('.dp2').find('ul').height();
		if($(this).hasClass('on')){
			return false;
		}else if($(this).hasClass('bgdp')){
			gnbMobile_dp1.removeClass('on');
			$(gnbMobile_wrap).find('.dp2').animate({
				'height':0
			},200);

			$(this).addClass('on');
			$(this).next('.dp2').animate({
				'height':dp2Height
			},500,'easeOutExpo');
			return false;
		}
	})

	gnbMobile_wrap.find('.gnb_mobile_content .language a').on('click', function(){//LANGUAGE
		var lanHeight = $('.language_list ul').height();

		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.language_list').animate({
				'height':0
			},300, 'easeOutExpo')
		}else{
			$(this).addClass('on');
			$('.language_list').animate({
				'height':lanHeight
			},500, 'easeOutExpo');
		}
		return false;
	});
}

////////// TOP 10 스토리
function top10Story(){
	spd = 400;
	eft = 'easeOutExpo';
	tg = $('.top10_story ul li');

	tg.on('mouseenter', function(){
		$(this).find('.dim').animate({
			opacity:'0.9'
		},spd,eft);


		$(this).find('.ct').animate({
			top:'-60px',
			opacity:'0'
		},spd,eft);

		$(this).find('.summ').animate({
			top:'2px',
			opacity:'1'
		},spd,eft);

	});

	tg.on('mouseleave', function(){
		$(this).find('.dim').stop(true,true).animate({
			opacity:'0.67'
		},spd,eft);


		$(this).find('.ct').stop(true,true).animate({
			top:'10px',
			opacity:'1'
		},spd,eft);

		$(this).find('.summ').stop(true,true).animate({
			top:'60px',
			opacity:'0'
		},spd,eft);
	});
}

////////// 페이지 상단 이동
function pageUp(){
	$('html, body').animate({
		scrollTop : 0
	},700,'easeOutQuart');
}

////////// 메인 컨텐츠 재배치
function mainMasonry(){
	$('.ctMenu .ctList_wrap').masonry({itemSelector : '.ctList'});
};

////////// 메인 비주얼
function mainVisual(){
	$('#web .bxslider').bxSlider({
	  mode: 'fade',
	  auto: true,
		pager : true,
		pagerSelector : "#web .pager",
	  captions: true
	});

	  $('#mobile .bxslider').bxSlider({
	  mode: 'fade',
	  auto: true,
	  captions: true
	});

	$('.instagram .bxslider').bxSlider({
		auto: true,
		slideWidth: 188,
		minSlides: 2,
		maxSlides: 4,
		moveSlides: 1,
		slideMargin: 32
	});
}

////////// 100인 선정단 리스트 보기
function list100_view(obj){
	var target = $(obj).attr('href');
	if($(obj).hasClass('on')){
		$(obj).removeClass('on');
		$(target).hide();
	}else{
		$(obj).addClass('on');
		$(target).show();
	}
}

////////// FAQ //////////
function faq(){
	var faqOpen = $('.faqWrap ul li > a.que'),
		faqView = $('.faqWrap ul li .faqView'),
		q = 'a.que',
		f = '.faqView';

	faqOpen.on('click', function(){
		faqOpen.css({'height':'auto','opacity':'1'});
		$(this).animate({
			height:'0px',
			opacity:0
		},300);

		faqView.hide();
		$(this).next(f).show();

		Pst = $(this).position();
		/*
		$('html, body').animate({
			scrollTop : Pst.top+'px'
		},500,'easeOutQuart');
		*/
	});


	$(faqView).find('.close > a').on('click', function(){
		var h = $(this).parent().parent().parent().find(q).css('height','auto');

		$(this).parent().parent().parent().find(q).animate({
			height:h.innerHeight(),
			opacity:1
		},300);

		$(this).parent().parent().parent().find(f).hide();
	});
}


function visualAni(){// TOP10스토리 원본이미지보기
	indx = 0;
	// page버튼 생성
	visual = $('#top10_imgView .imgview');
	visualLi = visual.find('ul li');
	totalSize = visualLi.size()-1;

	// page버튼 초기 셋팅
	pageBtn = $('.top10_story_view .thumbImg div');
	pageBtn.eq(indx).addClass('on');

	pageBtn.on('click', function(){// page버튼 클릭 이벤트
		idx = $(this).index();
		indx = $(this).index();


		if($('#top10_imgView').css('display') == 'block'){
			visualEft();
		}else{
			layerOpen();
		}
		imgPst(indx);
	});

	visual.find('.btn').on('click',function(){//좌우버튼 클릭 이벤트
		function anioop(){
			idx = indx;
			visualEft();
				imgPst(idx);
		}
		if(visualLi.is(':animated')){
				return false;
		}else{
			if($(this).hasClass('left')){
				if(indx == 0){
					indx = totalSize;
					anioop();
				}else{
					indx--;
					anioop();
				}
			}else{
				if(indx == totalSize){
					indx = 0;
					anioop();
				}else{
					indx++;
					anioop();
				}
			}
		}
	})



	function visualEft(){//이미지활성화 효과
		eft = 'easeInQuad';
		spd = 300;

		visual.find('.page .idx').text(idx+1);

		
		visualLi.removeClass('on');
		visualLi.eq(idx).addClass('on');
		visualLi.each(function(){
			if($(this).hasClass('on')){
				$(this).animate({
					'opacity':'1'
				},spd,eft)
			}else{
				$(this).animate({
					'opacity':'0'
				},spd,eft)
			}
		})
	}

	function imgPst(){// 이미지 사이즈,위치 체크
		var thisImg = visualLi.eq(indx).find('img'),
			maxW = visualLi.width();

		if(thisImg.height() > visualLi.height()){//이미지세로가 영역보다 클때
			thisImg.css('height','100%');
			imgY();
		}

		if(thisImg.width() > maxW){//이미지가로가 영역보다 클때
			thisImg.css('width','100%');
			imgY();

		}else{
			imgY();
		}

		function imgY(){// 이미지 중앙정렬
			imgH = $('#top10_imgView .imgview ul li').eq(indx).find('img').height();
			thisImg.css('margin-top',(-imgH/2)+'px');
		}

	}

	function layerOpen(){// 레이어 활성화
		visual.find('.page .idx').text(idx+1);

		visualLi.css('opacity','0');
		visualLi.eq(idx).addClass('on').css('opacity','1');
		$('#top10_imgView').show();
		$('#top10_imgView').append('<div id="dim"></div>');

	}

	$('#top10_imgView .close').on('click',function(){
		$('#top10_imgView').hide();
		$('#top10_imgView #dim').remove();
	})
	
}

function imgReset(){//TOP10스토리 하단 썸네일 이미지 정렬
	var imgH = $('.top10_story_view .ctb .thumbImg div')
	imgH.each(function(){
		thsiImg = $(this).find('img').innerHeight();
		$(this).find('img').css('margin-top',(-thsiImg/2)+'px');
	})
}

function scheduleMobile(){//프로그램스케줄 모바일
	var sch_mobile = $('.schedule_mobile');
	sch_mobile.find('.menu li a').on('click', function(){
		var target = $(this).attr('href');
		sch_mobile.find('.sch_view').hide();
		sch_mobile.find('.menu li a').removeClass('on');
		$(this).addClass('on');
		sch_mobile.find(target).show();
		return false;
	})
}

function pop_open(obj){//팝업열기
	var target = $(obj).attr('href');
	$(target).show();
}

function pop_close(obj){//팝업닫기
	var target = $(obj).attr('href');
	$(target).hide();
}