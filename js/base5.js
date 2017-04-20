$(document).ready(function(){
$(".lsbhide1").hide();
$(".lsbhide2").hide();
$("#contentblock").hide();
$("li#lsblink1").hover(function()
{
$("li#lsblink1").html('<a href="http://www.BuzzedWord.org">BuzzWord</a>');
});
$("li#lsblink2").hover(function()
{
$("li#lsblink2").html('<a href="http://api.jquery.com">JQuery API</a>');
});
$("li#lsblink3").hover(function()
{
$("li#lsblink3").html('<a href="http://nstcomputers.com/">NST Computers</a>');
});
$("li#lsblink4").hover(function()
{
$("li#lsblink4").html('<a href="http://www.thaidragoon.com/">ThaiDragoon</a>');
});
$("#rsb li").mouseenter(function()
{
$(this).css('background-color','#FDFFFF');
$(this).css('border-bottom','1px #FDFFFF solid')
var htmlstr = $(this).html();
$("#contentblock").html(htmlstr);
$("#contentblock").show(400);
});
$("#rsb li").mouseleave(function()
{
$(this).css('background-color','#B2CCFF');
$(this).css('border-bottom','1px blue solid');
$("#contentblock").hide(800);
});
$(".nbh1").mouseenter(function()
{
$(".lsbhide1").slideDown(1000);
$(".lsbhide1").show();
$(".lsbhide2").slideUp(800);
$(".lsbhide2").hide();
}); 
 $(".nbh2").mouseenter(function()
{
$(".lsbhide2").slideDown(1000);
$(".lsbhide2").show();
$(".lsbhide1").slideUp(800);
$(".lsbhide1").hide();
});
var today = new Date();
var holidays = new Array();
var monName = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var christmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 10 && today.getDate() == 11)
{
holidays[0] = "Vet"
}
else if (today.getMonth() == 10 && today.getDate() == 25)
{
holidays[0] = "Thanksgiving";
}
if(today.getMonth()==11)
{
holidays[0] = "Christmas";
}
if(today.getMonth()==9)
{
holidays[0] = "Halloween";
}
if(today.getMonth()==0 && today.getDate() == 1)
{
holidays[0] = "NewYears";
}
var getholidays = holidays[0];
switch(getholidays)
{
case "Thanksgiving":
$("#header").html("<div><img src='images/tg.jpg' height='100'><span><em><b>Happy Thanksgiving From DreamCPU.Inc</b></em></span></div>")
$("#words").html("")
break;
case "Christmas":
if (today.getMonth()==11 && today.getDate()>25) //if Christmas has passed already
christmas.setFullYear(christmas.getFullYear()+1) //calculate next year's Christmas
//Set 1 day in milliseconds
var one_day=1000*60*60*24
//Calculate difference btw the two dates, and convert to days
$("#words").html((Math.ceil((christmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!"))
break;
case "Halloween":
$("#header").html("<div><img src='images/halloween.jpg' height='100'><span><em><b>Happy Halloween From DreamCPU.Inc</b></em></span></div>")
break;
case "NewYears":
document.write(getholidays + "<br />");
break;
case "Vet":
$("#header").html("<div><img src='images/vd.gif' height='100'><span><em><b>Happy Veteran's Day From DreamCPU.Inc</b></em></span></div>")
$("#words").html("")
break;
default:
$("#words").html("It's " + monName[today.getMonth()]  + " " + today.getDate()+","+ " " +today.getFullYear())
break;
}


 $('content').hide();
    $("h2.testing1").click(function () {
    $(this).toggleClass("testing2").next().slideToggle("slow");
    });
	$("h2.testing3").click(function () {
    $(this).toggleClass("testing4").next().slideToggle("slow");
    });
	$("h2.testing5").click(function () {
    $(this).toggleClass("testing6").next().slideToggle("slow");
    });
	$("a.homeb").click(function () {
	$("#cont").html("Home");
   $("#homecon").html('Welcome to DreamCPU..<em>Where Your Dream Computer Awaits</em>');
    });
	$("a.blogb").click(function () {
	$("#cont").html("Programming Blog");
   $("#homecon").html('Welcome to DreamCPU..<em>Where Your Dream Computer Awaits</em>');
    });
	$("a.aboutb").click(function () {
	$("#cont").html("About DreamCpu.Inc");
   $("#homecon").html('DreamCpu.Inc Started back in 1997 by founder Jose Ortiz as a small one man company. Today DreamCpu is still a one man company.');
    });
	$("a.progb").click(function () {
	$("#cont").html("Programming");
   $("#homecon").html('<div>Programming languages I know are <ul><li>VB.Net</li><li>JQuery</li><li>Html</li><li>C++</li><li>javascript</li><li>SQL</li><li>vbscript</li></ul></div><br><div id="history">Click here for a bit of history of the .Net World</div>');
    });
	$("a.adminb").click(function () {
	$("#cont").html("Administrative Login");
   $("#homecon").html('<p>Check this out!!! <em>Changed HTML on the Fly</em></p>');
    });
	$("a.blogb").click(function (){
     $(document).ready(function () {
         var yurl = ""
         var furl = "proxy.php";
         $.ajax({
             url: furl,
             data: { url: escape(yurl) },
             dataType: "html",
             success: function (data) {
                 $("#homecon").load("proxy.php .content");
             },
             error: function (xhr, err, e) { 
			 alert("error");
			 }
         });
         return false;
     });      

	});
	$("#contact").click(function () {
	$("#cont").html("Please fill out the form and press send");
   $("#homecon").html('<form action="insert.php" method="post">Name: &nbsp;&nbsp;<Input Type="textbox" name="name"> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type="textbox" name="email"> <br><br>Phone Number: &nbsp;&nbsp;<Input Type="textbox" name="phone_number"> <br><br>Job Requested: &nbsp;&nbsp;<Input Type="textbox" name="job_requested"> <br><br> <input type="submit"></form>');
    });
		$("#send").live("click", function () {
	$("#cont").html('<?php echo "Thank you, .$_POST["name"]. We will contact you as soon as possible"?>');
	$("#homecon").html("");
    });
$("#history").live("click", function () {
	$("#cont").html('Do you know what is the Modified-Hungarian Notation is? ');
	$("#homecon").html('It is the notation of prefixing control names to identify the use brought forth by <a href="http://en.wikipedia.org/wiki/Charles_Simonyi">Dr. Charles Simonyi.</a> <div>ref: Beginning Visual Basic .Net pg 30<div>');
    });	

});