$(document).ready(function(){
	$(".maincircle").click(function(){
/* leftcircle section */

		$(".leftcircle").css("visibility", "hidden");
		$(".leftcircle").css("width","75px");
		$(".leftcircle").css("height","75px");
		$(".leftcircle").css("border-radius","50%");
		$(".leftcircle").css("background-image","-moz-radial-gradient(45px 45px 45deg, circle cover, yellow 0%, orange 100%, red 95%)");
		$(".leftcircle").css("background-image","-webkit-radial-gradient(45px 45px, circle cover, yellow, orange)");
		$(".leftcircle").css("background-image","radial-gradient(45px 45px 45deg, circle cover, yellow 0%, orange 100%, red 95%)");
		$(".leftcircle").css("margin-bottom","7px");
		$(".leftcircle").css("position","relative");


/* leftcircle1 section */

		$(".leftcircle1").css("margin-bottom","7px");
		
/* leftcircle1 section */
		$(".leftcircle2").css("top","-120x");

/* top circle */

		$(".topcircle").css("position","relative");
		$(".topcircle").css("margin-top","-125px");
		
		$(".leftcircle3").css("margin-top","-75px")
		$(".leftcircle4").css("margin-top","-50px")
		
		
		
	

		$(".topcircle").css({"-moz-animation-name":"floatup", "-moz-animation-duration":"1s"});
		$(".leftcircle").css({"-moz-animation-name":"floatup1", "-moz-animation-duration":"1s", "-moz-animation-delay": ".10s"});
		$(".leftcircle2").css({"-moz-animation-name":"floatup1", "-moz-animation-duration":"1s", "-moz-animation-delay": ".50s"});
		 $(".leftcircle3").css({"-moz-animation-name":"floatup1", "-moz-animation-duration":"1s", "-moz-animation-delay": "1s"});
		 $(".leftcircle4").css({"-moz-animation-name":"floatup1", "-moz-animation-duration":"1s", "-moz-animation-delay": "1.5s"});
		 $(".leftcircle").css("visibility", "visible");
		$(".leftcircle2").css("visibility", "visible");
		 $(".leftcircle3").css("visibility", "visible");
		 $(".leftcircle4").css("visibility", "visible");

		 

	});
		
});