$(document).ready(function (){
$(".secondnav").click(function(){
var firnav = $(".firstnav").css("marginLeft").replace('px','');
var secnav = $(".secondnav").css("marginLeft").replace('px','');
var thirdnav = $(".thirdnav").css("marginLeft").replace('px','');
var fourthnav = $(".fourthnav").css("marginLeft").replace('px','');
if(secnav > -102 && firnav == 0){
$(".secondnav").animate({
marginLeft: '-102px'
}, 900);
$(".firstnav").animate({
marginLeft: '641px'
}, 900);
$(".content").animate({
marginLeft: '100px'
}, 900);
$(".contentarea").html("this is the programming blog");
}
else {
$(".secondnav").animate({
marginLeft: '540px'
}, 900);
$(".firstnav").animate({
marginLeft: '0'
}, 900);
$(".content").animate({
marginLeft: '100px'
}, 900);
$(".contentarea").html("welcome page");
}
});
$(".thirdnav").click(function(){
var firnav = $(".firstnav").css("marginLeft").replace('px','');
var secnav = $(".secondnav").css("marginLeft").replace('px','');
var thirdnav = $(".thirdnav").css("marginLeft").replace('px','');
var fourthnav = $(".fourthnav").css("marginLeft").replace('px','');
if(thirdnav > -102){
$(".thirdnav").animate({
marginLeft: '-102px',
marginTop: '-603px'
}, 900);
$(".firstnav").animate({
marginLeft: '742px'
}, 900);
$(".content").animate({
marginLeft: '100px'
}, 900);
$(".secondnav").animate({
marginTop: '-303px'
}, 900);
$(".contentarea").html('<h3>Please fill out the form and click send request</h3><br><p><form action="insert.php" method="post">Name: &nbsp;&nbsp;<Input Type="textbox" name="name"> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type="textbox" name="email"> <br><br>Phone Number: &nbsp;&nbsp;<Input Type="textbox" name="phone_number"> <br><br>Job Requested: &nbsp;&nbsp;<Input Type="textbox" name="job_requested"> <br><br> <button type="submit" value="Send Request" class="btn success">Submit</button></form></p>');
}
else{
$(".thirdnav").animate({
marginLeft: '640px'
}, 900);
$(".firstnav").animate({
marginLeft: '0px'
}, 900);
$(".content").animate({
marginLeft: '100px'
}, 900);
$(".contentarea").html("welcome page");
}
});
$(".fourthnav").click(function(){
var firnav = $(".firstnav").css("marginLeft").replace('px','');
var secnav = $(".secondnav").css("marginLeft").replace('px','');
var thirdnav = $(".thirdnav").css("marginLeft").replace('px','');
var fornav = $(".fourthnav").css("marginLeft").replace('px','');
if(fornav > -102){
$(".fourthnav").animate({
marginLeft: '-102px'
}, 900);
$(".firstnav").animate({
marginLeft: '842px'
}, 900);
$(".content").animate({
marginLeft: '100px'
}, 900);
$(".contentarea").html("this is the services page");
}
else
{
$(".fourthnav").animate({
marginLeft: '740px'
}, 900);
$(".firstnav").animate({
marginLeft: '0'
},900);
$(".content").animate({
marginLeft: '100px'
}, 900);
$(".contentarea").html("welcome page");
}
});
$(".firstnav").click(function(){
var firnav = $(".firstnav").css("marginLeft").replace('px','');
var secnav = $(".secondnav").css("marginLeft").replace('px','');
var thirdnav = $(".thirdnav").css("marginLeft").replace('px','');
var fourthnav = $(".fourthnav").css("marginLeft").replace('px','');
alert(firnav);
$(".contentarea").html("welcome page");
});
});