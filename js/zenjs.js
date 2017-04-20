$(document).ready(function(){
$(".rssfeed").click(function(){
$("#cont").html("<h1>RSSFeeds</h1>");
$("#homecon").html("<script type='text/javascript'>$(document).ready(function () {$('#ticker1').rssfeed('http://feeds.feedburner.com/Jquery4u',{}, function(e) {$(e).find('div.rssBody').vTicker();});});</script><div id='ticker1'></div>");
});
$(".home").click(function(){
$("#cont").html("<h1>RSSFeeds</h1>");
$("#homecon").html("<script type='text/javascript'>$(document).ready(function () {$('#ticker1').rssfeed('http://feeds.feedburner.com/Jquery4u',{}, function(e) {$(e).find('div.rssBody').vTicker();});});</script><div id='ticker1'></div>");
});
$(".contactus").click(function (){
$("#cont").html("<h1>Contact Page</h1>");
$("#homecon").html('<h3>Please fill out the form and click send request</h3><br><p><form action="">Name: &nbsp;&nbsp;<Input Type="textbox" name="name" id="name"> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type="textbox" name="email" id="email"> <br><br>Phone Number: &nbsp;&nbsp;<Input Type="textbox" name="phone_number" id="phone_number"> <br><br>Job Requested: &nbsp;&nbsp;<Input Type="textbox" name="job_requested" id="job_requested"> <br><br> <button type="submit" value="Send Request" class="btn success" id="sendrequest">Submit</button></form></p>');
$("#leftsideul").html("");
}); 
$(document).on("click","#sendrequest",function(){
 var name = $("input#name").val();  
        var email = $("input#email").val();  
        var phone_number = $("input#phone_number").val(); 
		var job_requested = $("input#job_requested").val();
    var dataString = 'name='+ name + '&email=' + email + '&phone_number=' + phone_number + '&job_requested=' + job_requested; 
if (name == ""){
		alert("name field is empty");
		return false;
		}
		if (email == ""){
		alert("email field is empty");
		return false;
		}
		if (phone_number == ""){
		alert("phone number field is empty");
		return false;
		}
		if (job_requested == ""){
		alert("job reqested field is empty");
		return false;
		}
    $.ajax({  
      type: "POST",  
      url: "insert.php",  
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
$(".services").click(function (){
$("#homecon").addClass("flexcroll");
$("#cont").html("<h1>Services Page</h1>");
$("#homecon").html("<p><span><h3 id='liheaders'>These are the services we provide....</h3></span></p><ul><li id='liheaders'>Web Based Services</li><ul><li><button class='btn normal btnmargin' id='domreg'>Domain Registration</button></li><li><button class='btn normal btnmargin' id='webdesign'>Webpage Design</button></li></ul></ul><ul><li id='liheaders'>Programming Related Services</li><ul><li><button class='btn normal btnmargin' id='webprogramming'>Website Programming</button></li><li><button class='btn normal btnmargin' id='dfe'>Database Front End Application</button></li><li><button class='btn normal btnmargin' id='sql'>SQL</button></li></ul></ul><ul><li id='liheaders'>Computer Related Services</li><ul><li><button class='btn normal btnmargin' id='computerrepair'>Computer Repair</button></li><li><button class='btn normal btnmargin' id='maleware'>Maleware Removal</button></li><li><button class='btn normal btnmargin' id='virus'>Virus Removal</button></li><li><button class='btn normal btnmargin' id='osinstall'>Operating System Installation</button></li><li><button class='btn normal btnmargin' id='softwareinstall'>Software Installation</button></li></ul></ul><form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'><input type='hidden' name='cmd' value='_s-xclick'><input type='hidden' name='hosted_button_id' value='4NZJMAQGAK5C2'><table><tr><td><input type='hidden' name='on0' value='Options'>Options</td></tr><tr><td><select name='os0'><option value='Domain Registration'>Domain Registration $0.01 USD</option><option value='Domain Registration,Webhosting'>Domain Registration,Webhosting $0.01 USD</option><option value='Domain Registration,Webhosting &amp;Email'>Domain Registration,Webhosting &amp;Email $0.01 USD</option></select> </td></tr></table><input type='hidden' name='currency_code' value='USD'><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'><img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'></form>");
$("#leftsideul").html("");
});
});