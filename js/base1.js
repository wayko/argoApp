/// <reference path="http://code.jquery.com/jquery-1.4.1-vsdoc.js"/>

$(document).ready(function () {
    $('message').hide();
    $("h2.testing1").click(function () {
    $(this).toggleClass("testing2").next().slideToggle("slow");
    });
});
