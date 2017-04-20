$(document).ready(function(){
$("#content").hide();
$("#fp").hide();
$("#submit").click(function(){
var un = $("#un").val();  
var pw = $("#pw").val();
    var dataString = "un=" + un +"&pw=" + pw;
	
    $.ajax({  
      type: "POST",  
      url: "login.php",  
      data: dataString,  
      success: function(data) {
		$("#page-wrap").html(data)
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