$(document).ready(function(){
$("#forgotpassword").click(function(){
$("#fp").show();
$("#joinus").hide();
$("#register").hide();
$("#forgotpassword").hide()
});
$("#fp1").click(function(){
var un2 = $("#un2").val();  
var grad2 = $("#grad1").val();
var major2 = $("#major1").val();
    var dataString = "un2=" + un2 +"&major1=" + major2 +"&grad1=" + grad2;
    $.ajax({  
      type: "POST",  
      url: "forgotpassword.php",  
      data: dataString,  
      success: function(data) {
		$('#fp').html("<div id='message'></div>");  
        $('#message').html("<h2>Password Found!</h2>")  
        .append("<h3 style='display:block;'>"+ data + ".</h3>")  
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