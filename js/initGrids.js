//primer script on load
function init(argument) {

	canvas = document.getElementById("myCanvas");
	canvas.width = canvasWidthDec;
	canvas.height = canvasHeightDec;

	initGrids();//darle valor cero a las grids cuando ya sabemos el width

	
}

//darle valor 0 a las grids una vez sabemos el tamaño del canvas 
function initGrids(argument) {
	//los dos loops se pueden hacer en uno solo
	for (var i = 0; i < canvasWidth ; i++) {
		grid1[i]=[];
		for (var j = 0; j < canvasHeight; j++) {
			grid1[i][j] = 0;
		};
	}
	
	// var gridZ = []; tb inicializamos gridColor
	for (var i = 0; i < canvasWidth * gridDivision; i++) {
		gridZ[i]=[];
		gridColor[i] = [];
		colorSet[i] = [];		
		for (var j = 0; j < canvasHeight * gridDivision; j++) {
			gridZ[i][j] = math.complex(i/gridDivision - halfCanvasWidth, j/gridDivision - halfCanvasHeight);
			var set = math.complex();
			var z = math.complex();
			set = gridZ[i][j];
			// var modulus = math.complex(set.re*set.re + set.im*set.im);
			
			gridColor[i][j] = 0;	
			colorSet[i][j]	= false;	

		};
	}
	// drawVeryFirstGrid();
	// checkRules();
}



//emptyGrids , despuesde hacerla creo ver q es la misma q initgrids
function emptyGrids(argument) {
	for (var i = 0; i < canvasWidth; i++) {
		for (var j = 0; j < canvasHeight; j++) {
			grid1[i][j] = 0;
		};
	}
	// var grid2 = [];
	for (var i = 0; i < canvasWidth; i++) {
		for (var j = 0; j < canvasHeight; j++) {
			grid2[i][j] = 0;
		};
	}
}
