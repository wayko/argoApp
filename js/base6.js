$(document).ready(function(){
$('.floatingguide').hide();
$('a').mouseover(function(e){
$('.floatingguide').show();
$('.floatingguide').animate({top: e.clientY},1500).animate({left: e.clientX},3000);
$('a').mouseout(function(){
$('.floatingguide').stop(true);
$('.floatingguide').animate({left:0 }, 1500 ).animate({top:0},1500);
$('.floatingguide').hide("slow");
});
});
});

