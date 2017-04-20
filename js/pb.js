$(document).ready(function(){
 var yurl = "http://localhost/taxiregister.html"
         var furl = "proxy.php";
         $.ajax({
             url: furl,
             data: { url: escape(yurl) },
             dataType: "html",
             success: function (data) {
                 $(".textchange").load("proxy.php .content2");
                 
             },
             error: function (xhr, err, e) { alert("Error: " + err); }
         });
         return false;
     });      
});