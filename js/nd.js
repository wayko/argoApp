$(document).ready(function(){
$(".socials").mobilyblocks({
		trigger: 'click',
		direction: 'counter',
		duration:500,
		zIndex:200,
		widthMultiplier:.9
	});
	
	$(".home").click(function (){
$(".textchange").html("<h4>Welcome to DreamCPU.<br/>Here we supply many types of services, from registration to web development. <br />We would love to help fulfill your dreams.</h4>");
});
$(".services").click(function (){
$(".textchange").html("<p><span><h3 id='liheaders'>These are the services we provide....</h3></span></p><ul><li id='liheaders'>Web Based Services</li><ul><li><button class='btn normal btnmargin' id='domreg'>Domain Registration</button></li><li><button class='btn normal btnmargin' id='webdesign'>Webpage Design</button></li></ul></ul><ul><li id='liheaders'>Programming Related Services</li><ul><li><button class='btn normal btnmargin' id='webprogramming'>Website Programming</button></li><li><button class='btn normal btnmargin' id='dfe'>Database Front End Application</button></li><li><button class='btn normal btnmargin' id='sql'>SQL</button></li></ul></ul><ul><li id='liheaders'>Computer Related Services</li><ul><li><button class='btn normal btnmargin' id='computerrepair'>Computer Repair</button></li><li><button class='btn normal btnmargin' id='maleware'>Maleware Removal</button></li><li><button class='btn normal btnmargin' id='virus'>Virus Removal</button></li><li><button class='btn normal btnmargin' id='osinstall'>Operating System Installation</button></li><li><button class='btn normal btnmargin' id='softwareinstall'>Software Installation</button></li></ul></ul><form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'><input type='hidden' name='cmd' value='_s-xclick'><input type='hidden' name='hosted_button_id' value='TTV2JU5X5GH96'><table><tr><td><input type='hidden' name='on0' value='Domain Services'>Domain Services</td></tr><tr><td><select name='os0'><option value='Domain Registration'>Domain Registration $15.00 USD</option><option value='Domain Registration,Webhosting'>Domain Registration,Webhosting $25.00 USD</option><option value='Domain Registration,Webhosting,Email'>Domain Registration,Webhosting &amp;Email $35.00 USD</option></select> </td></tr></table><input type='hidden' name='currency_code' value='USD'><input type='image' src='/images/shoppingcart.png' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'><img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'></form>");
});
$(".contact").click(function (){

$(".textchange").html('<h3>Please fill out the form and click send request</h3><br><p><form action="">Name: &nbsp;&nbsp;<Input Type="textbox" name="name" id="name"> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type="textbox" name="email" id="email"> <br><br>Phone Number: &nbsp;&nbsp;<Input Type="textbox" name="phone_number" id="phone_number"> <br><br>Job Requested: &nbsp;&nbsp;<textarea rows="4" cols="80" name="job_requested" id="job_requested"></textarea> <br><br> <button type="submit" value="Send Request" class="btn success" id="sendrequest">Submit</button></form></p>');

});  
$(".rssfeeds").click(function (){
$(".textchange").html("<script type='text/javascript'>$(document).ready(function () {$('#ticker1').rssfeed('http://feeds.feedburner.com/Jquery4u',{}, function(e) {$(e).find('div.rssBody').vTicker();});});</script><div id='ticker1'></div>");
});
$(document).on("click","#sendrequest",function(){
 var name = $("input#name").val();  
        var email = $("input#email").val();  
        var phone_number = $("input#phone_number").val(); 
		var job_requested = $("textarea#job_requested").val();
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
        $('.textchange').html("<div id='message'></div>");  
        $('#message').html("<h2>Contact Form Submitted!</h2>")  
        .append("<h3 style='display:block;'>Thank you for contacting DreamCPU. We have received your request " +  name + ". We will review it and contact you as soon as possible.</h3>")  
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
	
});