$(document).ready(function (){
$("#home").mouseover(function(){
$("#tci").removeClass('active');
$("#home").addClass('active');
});
$("#tci").mouseover(function(){
$("#home").removeClass('active');
$("#tci").addClass('active');
});
});