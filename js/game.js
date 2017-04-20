var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
imgBird = new Image();
imgBird.src="img/twitter_64.png";
imgBird.addEventListener("load",init, false);
var requestAnimFrame = 
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame || 
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback){
		window.setTimeout(callback, 1000/60);
	};
	var birdX = 65;
	var birdY = 65;
function init(){
	requestAnimFrame(update);
}
function update(){
	birdY = birdY + 3;
	context.clearRect(0,0,400,400);
	context.drawImage(imgBird, birdX,birdY,55,55);
	context.fillRect(10,10, 40,380, "#000000");
	context.fillRect(10,10, 380,40, "#000000");
	context.fillRect(10,350, 380,40, "#000000");
	context.fillRect(350,10, 40,380, "#000000");
	context.fillRect(180,10, 40,180, "#000000");
	requestAnimFrame(update);
}