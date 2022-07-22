// /* Делаем собственный слайдер на jQuery */

// $(function() {	
// 	var slideNow = 1;
// 	var slideCount = $('.sliderwprapper').children().length;
// 	var slideTime = 5000;
// 	var navBtn = $('.slide-nav');



// 	// setInterval(nextSlide, slideTime);

// 	$('.btn-next').click(nextSlide);
// 	$('.btn-prev').click(prevSlide);


	
// 	function nextSlide() {
// 		if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
// 			$('.sliderwprapper').css({
// 				'transform': 'translate(0,0)',
// 				'-o-transform': 'translate(0,0)',
// 				'-webkit-transform': 'translate(0,0)'
// 			});
// 			slideNow = 1;
// 		} else {
// 			var translateWidth = -$('.viewport').width() * (slideNow);	
// 			$('.sliderwprapper').css({
// 				'transform': 'translate('+translateWidth+'px,0)',
// 				'-o-transform': 'translate('+translateWidth+'px,0)',
// 				'-webkit-transform': 'translate('+translateWidth+'px,0)'
// 			});	
// 			slideNow++;
// 		}
// 	}
// 	function prevSlide() {
// 		if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
// 			var translateWidth1 = -$('.viewport').width() * (slideCount - 1);
// 			$('.sliderwprapper').css({
// 				'transform': 'translate('+translateWidth1+'px,0)'
// 			});
// 			slideNow = slideCount;
// 		} else {
// 			var translateWidth2 = -$('.viewport').width() * (slideNow - 2);
// 			$('.sliderwprapper').css({
// 				'transform': 'translate('+translateWidth2+'px,0)'
// 			});	
// 			slideNow--;
// 		}
// 	}
	// 	navBtn.click(function() {
	// 		navBtn = $(this).index();
	// 		$('.active').removeClass('active');
	// 		$(this).toggleClass('active');
	// 		if (navBtn + 1 != slideNow) {
	// 			var translateWidth = -$('.viewport').width()	* (navBtn);	
	// 			$('.sliderwprapper').css({
	// 				'transform': 'translate('+translateWidth+'px,0)',
	// 				'-o-transform': 'translate('+translateWidth+'px,0)',
	// 				'-webkit-transform': 'translate('+translateWidth+'px,0)'
	// 			});	
	// 			slideNow = navBtn + 1;
// 		}
// 	});
// });	

$(document).ready(function () {
	var slideNow = 1;
	var slideCount = $(".sliderwprapper").children().length;
	var navBtn = $(".slide-nav");

	$('.btn-next').click(nextSlide);
	$('.btn-prev').click(prevSlide);


	function nextSlide(){
		if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount){
			$(".sliderwprapper").css({'transform' : 'translate(0,0)'});
			slideNow = 1;
		}else{
			var translateWidth = -$('.viewport').width() * (slideNow);
			$(".sliderwprapper").css({'transform' : 'translate('+translateWidth+'px, 0)'});
			slideNow++;
		}
	}
	function prevSlide(){
		if (slideNow == 1){
			var translateWidth1 = -$('.viewport').width() * (slideCount - 1);
 			$('.sliderwprapper').css({
 				'transform': 'translate('+translateWidth1+'px,0)'
 			});
 			slideNow = slideCount;
		}else{
			var translateWidth = -$('.viewport').width() * (slideNow - 2);
			console.log(slideNow);
			$(".sliderwprapper").css({'transform' : 'translate('+translateWidth+'px, 0)'});
			slideNow--;
		}
	}
	$('.btn').click(function(){
		$(".active").removeClass("active");
		var slidesNav = $(".slide-nav");
		$(slidesNav[slideNow - 1]).addClass('active');
	});

	navBtn.click(function(){
		navBtn = $(this).index();
		$(".active").removeClass("active");
		$(this).toggleClass("active");
		if (navBtn + 1 != slideNow) {
			var translateWidth = -$(".viewport").width() * (navBtn);
			console.log(translateWidth);
			$(".sliderwprapper").css({'transform': 'translate('+translateWidth+'px,0'});
			slideNow = navBtn + 1;
		}
	});

});