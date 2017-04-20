var now = new Date();
var month = now.getMonth() + 1;
var dates = now.getDate();
var year = now.getYear();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var zeroHour
var endNotes
var img_id
var Current_Date
var prob
function fourdigits(number){
return (number < 1000) ? number + 1900 : number;
}
function AMPM (numbers){
return (numbers > 12) ? numbers - 12 : numbers;
}
if (hours < 10){
zeroHour = '0' + AMPM(hours)
endNotes = 'AM'
}else{
zeroHour = AMPM(hours)
endNotes = 'PM'
}
$(document).ready(function(){
Current_Date = month + '/' + dates + '/' + (fourdigits(year)) + ' - ' + zeroHour + ':' + minutes + ':' + seconds + ' ' + endNotes;
$("#update").hide();
$(".items img").sortable({
revert:true,
});
$(".items img").draggable({
revert:true,
});
$(".problem").droppable({
accept: '.items img',
drop: function(event, ui){
$("#update").show();
var img_src = ui.draggable.attr("src");
img_id = ui.draggable.attr("id");
var htmlnew = '<div class="probdiv"><img src="' + img_src + '" id="' + img_id + '" class="smallimg group4"/>'
htmlnew = htmlnew + '<textarea rows="4" cols="80" class="textarea1" name="textarea1" placeholder="Please describe problem"></textarea>'+ '    ' + img_id + ' Date and Time Of Problem: ' + Current_Date + '<input type="hidden" id="currentdate" name="Current_Date" value="' + Current_Date +'"></div>'
$(".problem").append(htmlnew);
var numItems = $('.probdiv').length
var probHeight = 290;
var newHeight = probHeight * numItems;
$("#update").hide();
$(".problem").css("height", newHeight + "px");
$(".numbers").html(numItems + " item(s) added to the list");
}
});
});