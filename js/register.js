$(document).ready(function(){
$("#register").click(function(){
$("#joinus").hide();
$("#register").hide();
$("#fp").hide();
$("#forgotpassword").hide();
$("#content").show();
});
$("#register1").click(function(){
var un1 = $("#un1").val();  
var pw1 = $("#pw1").val();
var grad = $("#grad").val();
var major = $("#major").val();
var gender = $("#gender").val();
var today = new Date(); 
var name = $("#fn").val();
var dataString = "fn=" + name + "&datejoined=" + today.getDate() + "&grad=" + grad +"&major=" + major + "&un1=" + un1 + "&pw1=" + pw1 + "&gender=" + gender ;
    $.ajax({  
      type: "POST",  
      url: "register.php",  
      data: dataString,  
      success: function() {
		$('#content').html("<div id='message'></div>");  
        $('#message').html("<h2>Welcome!</h2>")  
        .append("<h3 style='display:block;'>Thank you " + un1 + " for joining the school board</h3>")  
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