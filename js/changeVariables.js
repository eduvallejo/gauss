
function changeInterval(argument) {
	clearTimeout(bucle);
   
	interval = document.getElementById("interval").value;
	console.log("interval : " + interval);	
	
	setTimeout(drawPixels1,interval);
	console.log("paused : " + paused);
}

function changeHeight(argument) {
	//iniciamos la gridTemporal
	var newWidth = document.getElementById("height").value;
	var newHeight = document.getElementById("height").value;
	console.log("newWidth : " + newWidth);
	// //solo se aplica para hacer más grande el tablero
	if (newHeight > canvasHeight) {
		//primero pausamos antes de cambiar la dimension del tablero
		if (paused == false) {pause();}
		
		temporalGrid(newWidth, newHeight);
		
		canvasHeight = document.getElementById("height").value;
		canvasWidth = document.getElementById("height").value;
		console.log("nuevo canvasWidth : " + canvasWidth);
		
		canvas.width = canvasWidth*zoom;
		canvas.height = canvasHeight*zoom;
		//inicializamos de nuevo las grids 1 y 2
		for (var i = 0; i < canvasWidth; i++) {
			grid1[i]=[];grid2[i]=[];
			for (var j = 0; j < canvasHeight; j++) {
				grid1[i][j] = temporalGrid[i][j];
				grid2[i][j] = 0;
			};
		}
		//volvemos a ponerlo en marcha
		drawVeryFirstGrid();
		resume();
	}else{
		document.getElementById("height").value = canvasHeight;
	}

}

// function changeHeight(argument) {
// 	//primero pausamos antes de cambiar la dimension del tablero
// 	if (paused == false) {pause();}
// 	//luego cambiamos las medidass
// 	canvasHeight = document.getElementById("height").value*zoom;
// 	canvasWidth = document.getElementById("height").value*zoom;
// 	canvas.width = canvasWidth*zoom;
// 	canvas.height = canvasHeight*zoom;
// 	// console.log("canvasHeight : " + canvasHeight);	
// 	// console.log("canvasWidth : " + canvasWidth);
// 	//volvemos a ponerlo en marcha
// 	resume();
// }

function changeZoom(argument) {
	zoom = document.getElementById("zoom").value ;
	console.log("zoom : " + zoom);
	// borrarPantalla();//sin borrar grids
	// init();
	document.getElementById("zoom").value = zoom;
	// drawVeryFirstGrid();
}

function eraseBoard(argument) {
	console.log("eraseBoard");
	clearTimeout(bucle);
	emptyGrids();
	drawVeryFirstGrid();
	// history.go(0);
	numGenerations = 0;
	pattern = 0;
	paused = true;
	console.log("numGenerations : " + numGenerations);
	document.title = "Generation: " + numGenerations;
}