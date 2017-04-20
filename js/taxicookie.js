$(document).ready(function(){
 $.ajax({  
      type: "GET",  
      url: "taxicookie.php",    
      success: function(data) {
	    $('#welcomearea').html("");
		$('#welcomearea').html("Welcome " + data )   		
        .hide()  
        .fadeIn(1500, function() {   
        });  
      },
		error: function(){
		alert('There was a error');
		}
    });
});	