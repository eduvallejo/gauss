//primer script on load
function init(argument) {

	canvas = document.getElementById("myCanvas");
	canvas.width = canvasWidthDec;
	canvas.height = canvasHeightDec;
	// ctx = canvas.getContext("2d");
	// console.log("width : " + canvasWidth);
	// console.log("zoom : " + zoom);	
	// console.log("paused : " + paused);	

	//debugging file uopload
	// document.getElementById("fileId").click();
	// document.getElementById("populateSelect").click();


	//para cuando se abra nuevo archivo 
	// document.getElementById('fileId').onchange = function () {
	//   // alert('Selected file: ' + this.value);
	//   ajax(this.value);
	//   // console.log("pattern : " + test);
	// };

	initGrids();//darle valor cero a las grids cuando ya sabemos el width

	
}

//darle valor 0 a las grids una vez sabemos el tamaño del canvas 
function initGrids(argument) {
	//los dos loops se pueden hacer en uno solo
	for (var i = 0; i < canvasWidth*gridDivision; i++) {
		grid1[i]=[];
		for (var j = 0; j < canvasHeight*gridDivision; j++) {
			grid1[i][j] = 0;
		};
	}
	// var grid2 = [];
	for (var i = 0; i < canvasWidth*gridDivision; i++) {
		grid2[i]=[];
		for (var j = 0; j < canvasHeight*gridDivision; j++) {
			grid2[i][j] = 0;
		};
	}
	// var gridZ = [];
	for (var i = 0; i < canvasWidth*gridDivision; i++) {
		gridZ[i]=[];
		for (var j = 0; j < canvasHeight*gridDivision; j++) {
			gridZ[i][j] = math.complex(0,0);
			// gridZ[i][j] = 0;
			// console.log("gridZ[" + i + "][" + j + "] : " + gridZ[i][j]);
			
		};
	}
	//draw after init
	drawVeryFirstGrid();
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
