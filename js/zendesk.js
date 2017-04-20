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
$(".button").click(function(){

var arrname
var arrprob
var arrreq
var arrcd
var htmlnew
var arrphone
var arrstdid

htmlnew = '<input type="text" id="currentdate" name="currentdate" value="' + Current_Date +'" />'
$('.timearea').append(htmlnew);
// name
arrname = $('.name').val();
// textarea array
arrprob = $('#problem').val();
// date array
arrcd = Current_Date
// end of date array

// requestor array
arrreq = $('#requestor').val();
// end of requestor array

arrphone = $('#phone').val();
// studentId
arrstdid = $('#stdid').val();

$.post("zendesk.php", {name: arrname, problem: arrprob, timedate: arrcd, requestor: arrreq, phone: arrphone, stdid: arrstdid });
alert("ticket has been created");
});
});