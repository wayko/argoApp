$(document).ready(function (){
$("#home").click(function (){
$("#homecon").html("Welcome To DreamCPU's Website</h3><p>Thank you for visiting us</p>")
});
$("#service").click(function (){
$("#homecon").html("<p><span><h3 id='liheaders'>These are the services we provide....</h3></span></p><ul><li id='liheaders'>Web Based Services</li><ul><li>Website Registration</li><li>Webpage Design</li><li></li></ul></ul><ul><li id='liheaders'>Programming Related Services</li><ul><li>Website Programming</li><li>Database Front End Application</li><li>SQL</li></ul></ul><ul><li id='liheaders'>Computer Related Services</li><ul><li>Computer Repair</li><li>Maleware Removal</li><li>Virus Removal</li><li>Operating System Installation</li><li>Software Installation</li></ul></ul>")
});
$("#contact").click(function (){
   $("#homecon").html('<h3>Please fill out the form and click send request</h3><br><p><form action="insert.php" method="post">Name: &nbsp;&nbsp;<Input Type="textbox" name="name"> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type="textbox" name="email"> <br><br>Phone Number: &nbsp;&nbsp;<Input Type="textbox" name="phone_number"> <br><br>Job Requested: &nbsp;&nbsp;<Input Type="textbox" name="job_requested"> <br><br> <input type="submit" value="Send Request"></form></p>');
    });
		$("#send").live("click", function () {
	$("#homecon").html('<?php echo "Thank you, .$_POST["name"]. We will contact you as soon as possible"?>');
});
$("#admin").click(function (){
   $("#homecon").html('<h3>Administrator Login</h3><br><p><form action="admin.php" method="post">UserName: &nbsp;&nbsp;<Input Type="textbox" name="name"> <br><br> Password:&nbsp;&nbsp;&nbsp; <input type="password" name="admin_password"> <br><br>Administrator Number: &nbsp;&nbsp;<Input Type="password" name="admin_number"> <br><br> <input type="submit" value="Send Request"></form></p>');
    });
		$("#send").live("click", function () {
	$("#homecon").html('');
});
});