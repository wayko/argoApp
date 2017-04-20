$(document).ready(function(){
$("#rb1").click(function(){
		var blog = $("textarea#blog").val();  
        var kw = $("input#kw").val();  
		var dataString = 'BlogPost='+ blog + '&keyword=' + kw;
if (blog == ""){
		alert("blog entry field is empty");
		return false;
		}
		if (kw == ""){
		alert("key word field is empty");
		return false;
		}
		else
		{
		
    $.ajax({  
      type: "POST",  
      url: "blogentry.php",  
      data: dataString,  
	  cache: false,
      success: function(result) {  
       alert(result);
      }
    });  
		}
		return false;


	});
	});