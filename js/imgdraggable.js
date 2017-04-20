$(document).ready(function(){
$(".imgs img").draggable({
revert:true,
});
$(".imgs").droppable({
accept: '.imgs img',
drop: function(event, ui){
var img_src = ui.draggable.attr("src");
img_id = ui.draggable.attr("id");
}
});
});