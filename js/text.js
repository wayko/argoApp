function equalHeight(group) {
var tallest = 0;
group.each(function() {
thisHeight = $(this).innerHeight(true);
if(thisHeight > tallest){
tallest = thisHeight;
}
});
return tallest;
}
$(window).load(function(){
var total = $('.imgtest img').length;
var totalwidth = total * 300 + 300;
var index
var i
var time
$('.imgtest li').first().addClass('first');
$('.imgtest li').last().addClass('last');
function scroll_dn() {
time = setInterval(function(){
$('.imglist').animate({scrollLeft:'+=100px'},400,function(){
$('.imgtest li:last').after($('.imgtest li:first'));
$('.imgtest').css('margin-left','-100px');

});
},1800);
}
$('.imglist').ready(function(){
$('.imgtest').css('width',totalwidth);
scroll_dn()
});
$('.imglist').mouseenter(function(){
$('.imgtest').css('cursor','pointer');
clearInterval(time);
});
$('.imglist').mouseleave(function(){
scroll_dn()
});
});