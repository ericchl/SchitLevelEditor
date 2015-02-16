var width = 10000, 
	height = 10000,
	c = document.getElementById('c'), 
	ctx = c.getContext('2d');
	c.width = width;
	c.height = height;
	playerHeight = 10;

var platformImage = new Image();
	platformImage.src = "img/Platform.png"; 

displayBackground = function() {
	// ctx.fillRect(0,0,width,height);
	ctx.drawImage(platformImage, 0, 630, 150, 1500, 0, 0, width, height);
	ctx.fillText("Hello World", 10,10);
};

drawPlatform = function(xLeft, yTop, xRight, yBottom){

}

if(platformImage.complete) { //check if image was already loaded by the browser
   displayBackground();
}else {
   platformImage.onload = displayBackground;
}

$(document).ready(function() {
  $(c).on('click', function(e) {
  	console.log("ENTER CLICK");
  });

});

