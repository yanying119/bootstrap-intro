$(function(){
	$(document).scroll(function(){
		var b = $(this).scrollTop();
		var c = $("body").height();
		$("section").each(function(){
			var f = $(this).offset().top;
			var top = f-b-c;
			
			if(top<=-200){
				$(this).addClass("animate");
			}
		})
		alert($(".animate").size());
	});

	(function(){
		var a = $(".border_left").height();
		var b = $(".border_right").height();
		if (a>b) {
			$(".border_right").height(a);
		}else {
			$(".border_left").height(b);
		}
	})();

	
});