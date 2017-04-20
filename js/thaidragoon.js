$("#ibuttons").click(function (){
     $(document).ready(function () {
         var yurl = ""
         var furl = "proxy1.php";
         $.ajax({
             url: furl,
             data: { url: escape(yurl) },
             dataType: "html",
             success: function (data) {
                 $("#content").load("proxy.php body");
             },
             error: function (xhr, err, e) { 
			 alert("error");
			 }
         });
         return false;
     });    
	});