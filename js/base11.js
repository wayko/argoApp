/// <reference path="http://code.jquery.com/jquery-1.4.1-vsdoc.js"/>

//  Protects data to be set only after library is loaded
$(document).ready(function () {
    $("input").click(function () {
        //  Mimicks "onClick" event in pure JS, using the cached query to speed commands

        // *Completed the  Challenge : convert to switch statements.
	switch($(this).attr("value")){
	case "id='second'" :
            test_byid();
break;
        case "class='test'" :
            test_byclass();
break;
        case "tag is 'span'" :
            test_bytag();
break;
        case "the first object where tag is 'span''" :	
            test_byfirstfilter();
break;
        case "tag is 'span', but id is not 'second'" :
            test_bynotfilter();
break;
       }  
    });
});

// Functions to toggle.
function test_byid() {
    $("#second").toggleClass("highlight");
}
function test_byclass() {
    $(".test").toggleClass("highlight");
}
function test_bytag() {
    $("span").toggleClass("highlight");
}
function test_byfirstfilter() {
    $("span:first").toggleClass("highlight");
}
function test_bynotfilter() {
    $("span:not(#second)").toggleClass("highlight");
}