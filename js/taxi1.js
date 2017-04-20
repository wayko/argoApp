$("#sb").click(function(){
var un = $("#un").val();  
var pw = $("#pw").val();
var rm = $("#rm").val();
if($('#rm').attr('checked')){
var dataString = "un=" + un + "&pw=" + pw + "&rm=" + rm;
}
else
{
var dataString = "un=" + un + "&pw=" + pw;
}
if (un == ""){
return false
}
if (pw == ""){
return false
}

else
{
    $.ajax({  
      type: "POST",  
      url: "taxilogin.php",  
      data: dataString,  
      success: function(data) {
	  $('.pull-right').html(data);
		$('.content').html("<div id='message'></div>");  
        $('#message').html("<h2>Welcome!</h2>")  
        .append("<h3 style='display:block;'>Thank you " + data + " for joining the school board</h3>")  
        .hide()  
        .fadeIn(1500, function() {   
        });  
      },
		error: function(){
		alert('There was a error');
		}
    });  
    return false; 
}	
});