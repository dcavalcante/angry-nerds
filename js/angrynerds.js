// console.log('vai chola daniel? chola mais, chola!');

var gameCanvas = document.getElementById("game-canvas");
var context2d = gameCanvas.getContext("2d");
var canvasWidth = gameCanvas.width;
var canvasHeight = gameCanvas.height;


var backgroundResource = new Resource("img/cenario.png", {x:100, y:200});
// var schoolResource = new Resource();
// var forceResource = new Resource();
// var cannonBaseResource = new Resource();



setTimeout(function() {
	if(Resource.totalLoaded += Resource.totalInstatiated) {
		backgroundResource.draw(context2d);
		// context2d.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);
		// context2d.drawImage(schoolImage, 0, 0, schoolImage.width, schoolImage.height);
		// context2d.drawImage(forceImage, 0, 0, forceImage.width, forceImage.height);
		// context2d.drawImage(cannonBaseImage, 0, 0, cannonBaseImage.width, cannonBaseImage.height);
	}
}, 1000);


// var resourcesLoaded = 0;
// var backgroundImage = new Image();
// var schoolImage = new Image();
// var forceImage = new Image();
// var cannonBaseImage = new Image();

// backgroundImage.onload = loadAssets;
// backgroundImage.src = "img/cenario.png";



// function onResourceLoaded() {
// 	resourcesLoaded += 1;
// 	var imageScale = canvasWidth/backgroundImage.width;
// 	console.log(imageScale, this)
// 	this.width *= imageScale;
// 	this.height *= imageScale;
// }

// function loadAssets() {
// 	resourcesLoaded += 1;
	
// 	schoolImage.onload = onResourceLoaded;
// 	schoolImage.src = "img/escola.png";

// 	forceImage.onload = onResourceLoaded;
// 	forceImage.src = "img/barra_de_forca.png";

// 	cannonBaseImage.onload = onResourceLoaded;
// 	cannonBaseImage.src = "img/suporte_canhao.png";
// };