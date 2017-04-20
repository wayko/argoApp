/// <reference path="http://code.jquery.com/jquery-1.4.1-vsdoc.js"/>

//  Protects data to be set only after library is loaded
$(document).ready(function () {
    $("input").click(function () {
        //  Mimicks "onClick" event in pure JS, using the cached query to speed commands


        // * Challenge for Jose: convert this to switch statements.
       ($(this).swithClass("highlight", "purple", 1000);
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