$(document).ready(function(){
$(".tab1").click(function(){
$(".contentheader").html("<h2>Home</h2>");
$(".contentsec").html("Welcome to Sinacomp<br />Teaching - Tutoring - Computer Repair & Services");
});
$(".tab2").click(function(){
$(".contentheader").html("<h2>Computers</h2>");
$(".contentsec").html("<ul><li>Software & Hardware Services</li><li>Teaching & Tutoring</li><li>Planning & Projects</li></ul>");
});
$(".tab7").click(function(){
$(".contentheader").html("<h2>Contact Us</h2>");
$(".contentsec").html("<p><form action=''>Name: &nbsp;&nbsp;<Input Type='textbox' name='name' id='name'> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type='textbox' name='email' id='email'> <br><br>Phone Number: &nbsp;&nbsp;<Input Type='textbox' name='phone_number' id='phone_number'> <br><br>Job Requested: &nbsp;&nbsp;<Input Type='textbox' name='job_requested' id='job_requested'> <br><br> <button type='submit' value='Send Request' class='btn success' id='sendrequest'>Submit</button></form></p>");
});
$(".tab8").click(function(){
$(".contentheader").html("<h2>Contact for procedure</h2>");
$(".contentsec").html("<p><form action=''>Name: &nbsp;&nbsp;<Input Type='textbox' name='name' id='name'> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type='textbox' name='email' id='email'> <br><br>Phone Number: &nbsp;&nbsp;<Input Type='textbox' name='phone_number' id='phone_number'> <br><br>Job Requested: &nbsp;&nbsp;<Input Type='textbox' name='job_requested' id='job_requested'> <br><br> <button type='submit' value='Send Request' class='btn success' id='sendrequest'>Submit</button></form></p>");
});
$(".tab3").click(function(){
$(".contentheader").html("<h2>Autocad - All Versions</h2>");
$(".contentsec").html("<ul><li>Teaching & Tutoring<li class='subli'>Group or Individual</li></li><li>Design & Drawing Preperation</li><li>For Archetects, Facility and Interior Design Engineer</li></ul>");
});
$(".tab4").click(function(){
$(".contentheader").html("<h2>Technical Course</h2>");
$(".contentsec").html("<ul><li>All Engineering Courses</li><li>Basic Math & General Physics</li><li>Groups & Individuals</li></ul>");
});
$(".tab5").click(function(){
$(".contentheader").html("<h2>Licencing</h2>");
$(".contentsec").html("Preperation For The Following Licences<br /> <ul><li>EPA</li><li>DEP</li><li>P99</li><li>G35</li><li>S12 - S13 - S14</li><li>OSHA</li><li>NITE</li><li>ICE</li><li>EIT</li><li>PE</li>");
});
$(".tab6").click(function(){
$(".contentheader").html("<h2>Consulting</h2>");
$(".contentsec").html("Preparing of Engineering Drawings. <ul><li>Architectural</li><li>Industrial</li><li>Design & Estimates</li><li>HVAC load calculations</li><li>Selection of equipment with drawings</li>");
});
$(document).on("click","#sendrequest",function(){
var name = $("input#name").val();
});
});