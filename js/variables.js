var canvas;
var ctx;

var parser = math.parser();

var grid1 = [];
var grid2 = [];
var gridZ = [];
var totalFuera = 0;
var temporalGrid = [];//para lo del resize en marcha

var mousePos;
var count = 0;
var interval = 30;
// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);				

var canvasHeight = 3;
//zoom = zoom
var zoom = 1;
var canvasWidth = canvasHeight;
var halfCanvasWidth = canvasWidth/2;
var halfCanvasHeight = canvasHeight/2;
var canvasWidthDec = canvasWidth*300;
var canvasHeightDec = canvasHeight*300;
var c = math.complex();
// c = math.complex(-0.687,+0.312);
// c = math.complex( -1.375 );
c = math.complex(-0.75); //mandelbrot
// c = math.complex(0.27, 0.01); //espiral
// c = math.complex(0.36, 0.32); //espiral
// c = math.complex(-0.74, 0.12); //espiral
// c = math.complex(-0.75, 0.03); //espiral
// c = math.complex(0.37, 0.28); //espiral
// c = math.complex(-0.8 ,0.156); //espiral
// c = math.complex(0.360 + 0.1003); //espiral

var neighboursAlive;
var numGenerations = 0;
var gridX; var gridY; var message;
//true o false para escribir o solo mover
var write = false;

//para clear time out
var bucle;
// #N Block
// #C An extremely common 4-cell still life.
// #C www.conwaylife.com/wiki/index.php?title=Block
// x = 2, y = 2, rule = B3/S23
// 2o$2o!
var block1 = "";//la variable pattern en el indice
var pattern;
// var origenPatternsImportados = canvasHeight/4;

// var paused = false;
var paused = true;

