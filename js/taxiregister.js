$(document).ready(function(){
$("#rb1").click(function(){
var fn = $("input#fn").val();  
        var un = $("input#un").val();  
        var pw = $("input#pw").val(); 
    var dataString = 'fn='+ fn +'&un=' + un + '&pw=' + pw; 
if (fn == ""){
		alert("Name field is empty");
		return false;
		}
		if (un == ""){
		alert("Username field is empty");
		return false;
		}
		if (pw == ""){
		alert("Password field is empty");
		return false;
		}
    $.ajax({  
      type: "POST",  
      url: "http://localhost/taxiregister.php",  
      data: dataString,  
      success: function() {  
        $('#homecon').html("<div id='message'></div>");  
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