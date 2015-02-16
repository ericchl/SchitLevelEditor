var width = 1000, 
	height = 10000,
	c = document.getElementById('c'), 
	ctx = c.getContext('2d');
	c.width = width;
	c.height = height;

var platformImage = new Image();
	platformImage.src = "img/Platform.png"; 

var playerImage = new Image();
	playerImage.src = "img/GameCharacter_Stand250.png"



// var that = this;

displayBackground = function() {
	// ctx.fillRect(0,0,width,height);
	ctx.drawImage(platformImage, 0, 630, 150, 1500, 0, 0, width, height);
	ctx.drawImage(playerImage, 0, 0, 1000, 1000, 0, height-60, 60, 60);

	// ctx.fillText("Hello World", 10,10);
};

var platformVector = [];
var platformCounter = 0;

drawPlatform = function(xLeft, yTop, xRight, yBottom){
	console.log("draw platform");
	console.log("xLeft: " + xLeft + ", yTop: " + yTop);
	console.log("xRight: " + xRight + ", yBottom: " + yBottom);
	var platform_width = xRight - xLeft,
		// platform_height = yBottom - yTop;
		platform_height = 12;

	ctx.drawImage(platformImage, 0, 0, 140, 200, xLeft-4, yTop, 20, platform_height*2);
	ctx.drawImage(platformImage, 0, 420, 140, 200, xLeft+platform_width -4 , yTop, 20, platform_height*2);
	ctx.drawImage(platformImage, 0, 210, 20, 200, xLeft, yTop, platform_width, platform_height*2);

	platformVector[platformCounter] = {x: xLeft, y: yTop, width: platform_width, height: platform_height};
	platformCounter++;

	// if (platformCounter == 10) {
	// 	serializePlatforms();
	// }
}

serializePlatforms = function() {
	var jsonStr = JSON.stringify(platformVector);
	console.log(jsonStr);

	// var fs = require(['fs'], function(fs) {
	// 	fs.writeFile("platforms.txt", jsonStr, function(err) {

	// 	});
	// });
}

if(platformImage.complete) { //check if image was already loaded by the browser
   displayBackground();
}else {
   platformImage.onload = displayBackground;
}

$(document).ready(function() {
	// var rect = canvas.getBoundingClientRect();
	var x1, x2, y1, y2;

	$(c).on('mousedown', function(e) {
		console.log("mouse down");
		x1 = e.pageX - $(c).offset().left;
		y1 = e.pageY - $(c).offset().top;
		console.log("x1: " + x1 + ", y1: " + y1);
	});

	$(c).on('mouseup', function(e) {
		console.log("mouse up");
		x2 = e.pageX - $(c).offset().left;
		y2 = e.pageY - $(c).offset().top;
		console.log("x2: " + x2 + ", y2: " + y2);

		drawPlatform(x1, y1, x2, y2);
	});

});

document.getElementById("doneButton").onclick = function() {
	alert("DONE CLICKED - SERIALIZING PLATFORMS");
	serializePlatforms();
};

