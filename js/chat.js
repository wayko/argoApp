$(document).ready(function(){
$("#submitpost").click(function(){
var writepost = $("#writepost").val();  
    var dataString = writepost;
	var wallpost = $('#wallpost').html();
if (writepost == ""){
		return false;
		}
    $.ajax({  
      type: "POST",  
      url: "posting.php",  
      data: dataString,  
      success: function() {
	  
 $('#writepost').val("");	  
        $('#wallpost').html($('#wallpost').html() + "<table><tr><td>" + dataString + "</td></tr></table>" )  
        .hide() 
        .fadeIn(500, function() {   
        });  
      },
		error: function(){
		alert('There was a error');
		}
    });  
    return false;  
});
});