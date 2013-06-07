$(function() {

	var canvas = document.getElementById("mycanvas")
	, ctx = canvas.getContext("2d")
	;

	canvas.width = canvas.height = 200;
	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(50, 50, 25, 0, Math.PI * 2, true);
	ctx.arc(150, 50, 25, 0, Math.PI * 2, true);
	ctx.fill();

	

	});
