$(document).ready(function(){
	var bprefix;
	var browsertype;
	jQuery.each( jQuery.browser, function(i){
		if (i == "mozilla")
		{
			bprefix = "-moz-";
		}
		if (i == "msie")
		{
			bprefix = "-ms-";
		}
		if (i == "webkit")
		{
			bprefix = "-webkit-";
		}
		if (i == "opera")
		{
			bprefix = "-o-";
		}
});
	
$(this).mousedown(function(){
	$(".innerbutton").css("background", bprefix + "linear-gradient(left, rgba(155,247,49,1) 0%, rgba(255,255,255,0.48) 35%, rgba(255,255,255,0.38) 42%, rgba(155,247,49,0.26) 50%, rgba(255,255,255,0.39) 59%, rgba(255,255,255,0.51) 67%, rgba(155,247,49,1) 100%)");
	$(".innerbutton").css("box-shadow", "inset 0 25px 10px #9BF731");
	$(".middlebutton").css("background", bprefix + "linear-gradient(left, rgba(155,247,49,1) 0%, rgba(255,255,255,0.48) 35%, rgba(255,255,255,0.38) 42%, rgba(155,247,49,0.26) 50%, rgba(255,255,255,0.39) 59%, rgba(255,255,255,0.51) 67%, rgba(155,247,49,1) 100%)");
	$(".outerbutton").css("background", bprefix + "linear-gradient(left, rgba(155,247,49,1) 0%, rgba(255,255,255,0.48) 35%, rgba(255,255,255,0.38) 42%, rgba(155,247,49,0.26) 50%, rgba(255,255,255,0.39) 59%, rgba(255,255,255,0.51) 67%, rgba(155,247,49,1) 100%)");
	$('#button').toggleClass('on');
});
$(this).mouseup(function(){
	$(".innerbutton").css("background", bprefix + "linear-gradient(left, rgba(255,0,0,1) 0%, rgba(255,255,255,0.48) 35%, rgba(255,255,255,0.38) 42%, rgba(255,0,0,0.26) 50%, rgba(255,255,255,0.39) 59%, rgba(255,255,255,0.51) 67%, rgba(255,0,0,1) 100%)");
	$(".innerbutton").css("box-shadow", "inset  0 25px 10px #ff0000");
	$(".middlebutton").css("background", bprefix + "linear-gradient(left, rgba(255,0,0,1) 0%, rgba(255,255,255,0.48) 35%, rgba(255,255,255,0.38) 42%, rgba(255,0,0,0.26) 50%, rgba(255,255,255,0.39) 59%, rgba(255,255,255,0.51) 67%, rgba(255,0,0,1) 100%)");
	$(".outerbutton").css("background", bprefix + "linear-gradient(left, rgba(255,0,0,1) 0%, rgba(255,255,255,0.48) 35%, rgba(255,255,255,0.38) 42%, rgba(255,0,0,0.26) 50%, rgba(255,255,255,0.39) 59%, rgba(255,255,255,0.51) 67%, rgba(255,0,0,1) 100%)");
});
});




