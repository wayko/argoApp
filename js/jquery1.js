/// <reference path="http://code.jquery.com/jquery-1.4.1-vsdoc.js"/>
$(document).ready(function () {
$('leftmenu').hide();
$("h4.menus").click(function () {
$(this).toggleClass("menus1").next().slideToggle("slow");
});
}); 