var now = new Date();
var month = now.getMonth() + 1;
var dates = now.getDate();
var year = now.getYear();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var zeroHour
var endNotes
var Current_Date

function fourdigits(number){
return (number < 1000) ? number + 1900 : number;
}
function AMPM (numbers){
return (numbers > 12) ? numbers - 12 : numbers;
}
if (hours < 10){
zeroHour = '0' + AMPM(hours)
endNotes = 'AM'
}else{
zeroHour = AMPM(hours)
endNotes = 'PM'
}

$(document).ready(function(){
Current_Date = month + '/' + dates + '/' + (fourdigits(year)) + ' - ' + zeroHour + ':' + minutes + ':' + seconds + ' ' + endNotes;






$(document).on("click",".add",function(){
	var rowid = $(this).closest("tr").attr('id');
	var currentAmount = $(this).parents('tr').find('td').eq(2).text();
	var newAmount = parseInt(currentAmount) + 1;
	var dataString = 'rowid='+ rowid +'&Available=' + newAmount; 
	$.ajax({  
      type: "POST",  
      url: "http://localhost/tonerupdate.php",  
      data: dataString,  
      success: function() {  
       setTimeout(
                  function() 
                  {
                     location.reload();
                  }, 005); 
      },
		error: function(){
		alert('There was a error');
    
		}
    });  
    return true; 
});
$(document).on("click",".remove",function(e){

var arrname
var arrprob
var arrcd
var arrreq




	var rowid = $(this).closest("tr").attr('id');
	var currentAmount = $(this).parents('tr').find('td').eq(2).text();
	var printerName = $(this).parents('tr').find('td').eq(1).text();
	var newAmount = parseInt(currentAmount) - 1;
	if(parseInt(currentAmount) < 6)
	{
		alert("There is less than 5 toners left for " +  printerName + ", please order more");
		arrname = "Jose Ortiz";
		arrprob = "There is less than 5 toners left for " +  printerName + ", please order more";
// end of textarea array

//open excel
//var dataString2 = 'Printer Name' +  printerName + ' Current Amount ' + newAmount;
//window.open('data:application/vnd.ms-excel,filename=exportData.xlsx;' + escape(dataString2));
	//    e.preventDefault();

// date array
arrcd = Current_Date;
alert(arrcd);
// end of date array

// requestor array
arrreq = "jortiz@tcicollege.edu";
// end of requestor array

$.post("zendeskToner.php", {name: arrname, problem: arrprob, timedate: arrcd, requestor: arrreq });

}	

var dataString = 'rowid='+ rowid +'&Available=' + newAmount; 
	$.ajax({  
      type: "POST",  
      url: "http://localhost/tonerupdate.php",  
      data: dataString,  
      success: function() {  
       setTimeout(
                  function() 
                  {
                     location.reload();
                  }, 005); 
      },
		error: function(){
		alert('There was a error');
    
		}
    });  
    return true; 
});
$(document).on("click",".plus10",function(){
	var rowid = $(this).closest("tr").attr('id');
	var currentAmount = $(this).parents('tr').find('td').eq(2).text();
	var newAmount = parseInt(currentAmount) + 10;
	var dataString = 'rowid='+ rowid +'&Available=' + newAmount; 
	$.ajax({  
      type: "POST",  
      url: "http://localhost/tonerupdate.php",  
      data: dataString,  
      success: function() {  
        setTimeout(
                  function() 
                  {
                     location.reload();
                  },005); 
      },
		error: function(){
		alert('There was a error');
    
		}
    });  
    return true; 
});
});
	