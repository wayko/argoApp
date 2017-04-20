 
$(document).ready(function(){
$("#startup").click(function(){
var dataString = 'token='+ 'u5jHpOXdueqjLNsrbwmWSg' +'&email=' + 'programmers@dreamcpu.com' + '&first_name' + 'Jose' + '&last_name=' + 'Ortiz' + '&companu_url=' + 'www.dreamcpu.com' + '&country=' + 'USA' + '&twitter_name' +  '@DreamCPU';  
 $.ajax({  
      type: "POST",  
      url: "   http://www.startuppack.org/v1/users/",  
      data: dataString,  
      success: function() {  
        $('.content').html("<div id='message'></div>");  
        $('#message').html("<h2>Contact Form Submitted!</h2>")  
        .append("<h3 style='display:block;'>Thank you for contacting DreamCPU. We have received your request " +  fn + ". We will review it and contact you as soon as possible.</h3>")  
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