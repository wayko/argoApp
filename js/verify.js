$(document).ready(function(){
$("#sub").click(function(){
var fn = $("#fn").val();  
var sid = $("#sid").val();
var lfs = $("#lfs").val();
    var dataString = "fn=" + fn +"&sid=" + sid +"&lfs=" + lfs;
    $.ajax({  
      type: "POST",  
      url: "verify.php",  
      data: dataString,  
      success: function(data) {
		$('#content').html("<div id='message'></div>");  
        $('#message').html("<h2>Reset Password.</h2>")  
        .append("<h3 style='display:block;'>"+ data + "</h3>")  
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