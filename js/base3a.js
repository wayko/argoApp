
$(document).ready(function() {
$('a.waykolight[href^=#]').click(function() {
var popID = $(this).attr('rel');
var popURL = $(this).attr('href');
var query = popURL.split('?');
var dim = query[1].split('&');
var popWidth = dim[0].split('=')[1];
$('#' + popID).fadeIn().css({ 'width': Number(popWidth) }).prepend('<a href="#" class="close"><img src="close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');

var popMargTop = ($('#' + popID).height() + 80) / 2;
var popMargLeft = ($('#' + popID).width() + 80) / 2;

    //Apply Margin to Popup
$('#' + popID).css({
    'margin-top': -popMargTop,
    'margin-left': -popMargLeft
});


    //Fade in Background
   $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
   $('#fade').css({'filter' : 'alpha(opacity=50)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'}) is used to fix the IE Bug on fading transparencies 

    return false;
});

//Close Popups and Fade Layer
$('a.close, #fade').live('click', function() { //When clicking on the close or fade layer...
    $('#fade , .wayko_block').fadeOut(function() {
        $('#fade, a.close').remove();  //fade them both out
    });
    return false;
});
});