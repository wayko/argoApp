function equalHeight(group) {
var tallest = 0;
group.each(function() {
thisHeight = $(this).innerHeight(true);
if(thisHeight > tallest){
tallest = thisHeight;
}
});
return tallest;
}

$(document).ready(function(){

$.ajax({  
      type: "GET",  
      url: "taxisales.php",    
      success: function(data) {
	    $('.content').html(data);
		$('#tblsales').height("auto")
		var tbl_height = equalHeight($("#tblsales"))
		var left_height = equalHeight($(".pull-left"))
		
		var cont_height
		 if(tbl_height > left_height){
		    cont_height = tbl_height;
		 }
		else
		{
		cont_height = left_height + 100;
		 }
		$("div.content").height(cont_height)
		$("div.pull-left").height(cont_height)
		$("div.pull-right").height(cont_height)
$('tbody tr:odd').css('background-color', 'yellow')
        .hide()  
        .fadeIn(1500, function() {   
        });  
      },
		error: function(){
		alert('There was a error');
		}
    });  
});