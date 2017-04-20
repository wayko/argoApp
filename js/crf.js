var currentTimeString
var currentHours
var currentMinutes
function updateClock()
     {
      var currentTime = new Date ( );
       currentHours = currentTime.getHours ( );
       currentMinutes = currentTime.getMinutes ( );
      var currentSeconds = currentTime.getSeconds ( );
 
      // Pad the minutes and seconds with leading zeros, if required
      currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
      currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
 
      // Choose either "AM" or "PM" as appropriate
      var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
 
      // Convert the hours component to 12-hour format if needed
      currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
 
      // Convert an hours component of "0" to "12"
      currentHours = ( currentHours == 0 ) ? 12 : currentHours;
 
      // Compose the string for display
       currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;  
$("#datestart2").html(currentTimeString);	   
 }


$(document).ready(function(){

$(".datepicks").datepicker({
buttonImageOnly: true,
buttonImage: "/images/arrow2_left.gif",
showOn: "both"
});

$(".submit").click(function(){
		var datereq = $("input#daterequest").val();  
        var datestart = $("input#datestart").val();  
        var enddate = $("input#dateend").val(); 
		var requestername = $("input#requestername").val();
		var requesterphone = $("input#requesterphone").val();
		var requesteremail = $("input#requesteremail").val();
		var priority = $("input#priority").val();
		var implementer = $("input#implementer").val();
		var attachyes = $("input#attachyes").val();
		var attachno = $("input#attachno").val();
		var sysimpact = $("input#sysimpact").val();
		var busirisk = $("input#busirisk").val();
		var changetest = $("input#changetest").val();
		var techrisk = $("input#techrisk").val();
		var descriptions = $("textarea#descriptions").val();
		var busijust = $("textarea#busijust").val();
		var busiriskcom = $("textarea#busiriskcom").val();
		var busiimp = $("textarea#busiimp").val();
		var testp = $("textarea#testp").val();
		var implement = $("textarea#implement").val();
		var backouta = $("textarea#backouta").val();
		var dateimpl = $("input#dateimpl").val();
		var dataString = 'daterequest='+ datereq + '&datestart=' + datestart + '&dateend=' + enddate + '&requestername=' + requestername+ '&requesterphone=' + requesterphone+ '&requestemail=' + requesteremail+ '&priority=' + priority+ '&implementer=' + implementer+ '&attachyes=' + attachyes+ '&attachno=' + attachno+ '&sysimpact=' + sysimpact+ '&busirisk=' + busirisk+ '&changetest=' + changetest+ '&techrisk=' + techrisk+ '&descriptions=' + descriptions+ '&busijust=' + busijust+ '&busiriskcom=' + busiriskcom+ '&busiimp=' + busiimp+ '&testp=' + testp+ '&implement=' + implement+ '&backouta=' + backouta+ '&dateimpl=' + dateimpl; 
$.ajax({  
      type: "POST",  
      url: "crf.php",  
      data: dataString,  
      success: function() {  
        $('#homecon').html("<div id='message'></div>");  
        $('#message').html("<h2>Contact Form Submitted!</h2>")  
        .append("<h3 style='display:block;'>Thank you for contacting DreamCPU. We have received  <br /> your request " +  name + ". We will review it and contact <br /> you as soon as possible.</h3>")  
        .hide()  
        .fadeIn(1500, function() {   
        });  
      },
		error: function(){
		alert('There was a error');
		}
    });  
    return false;  
});

 setInterval('updateClock()', 1000);
 
$("#datestart2a").click(function(){
updateClock()
alert(currentHours);
$("#datestart2").html("test");
});
});