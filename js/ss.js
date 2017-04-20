$(document).ready(function(){
function blink(selector){
$(selector).fadeIn(15000, function(){
$(this).fadeOut(500, function(){
blink(this);
});
});
}
blink('.sspp');
blink('.insert');
});