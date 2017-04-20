$(document).ready(function(){
var options = {
defaultAction: 'drawIt',
drawOnly: true,
lineTop: 70,
lineMargin: 20,
penColour: '#000'
}
$('.sigPad').signaturePad(options);
var signature = $('.signed').signaturePad({displayOnly:true});
$('#get').click(function(){
$.ajax({
url: 'return_signature.php',
type: 'POST',
success: function(data) {
signature.regenerate(data);
}
});
});
});