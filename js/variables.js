var canvas;
var ctx;

var parser = math.parser();

var grid1 = [];
var gridZ = [];

var interval = 50;
// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);				

var canvasWidth = 3;
//zoom = zoom
var zoom = 1;
var gridDivision = 500;
var maxIterations = 40;
//lo de abajo se usa en patrones planos, para horrar computos
var canvasHeight = canvasWidth-1;
var halfCanvasWidth = canvasWidth/2;
var halfCanvasHeight = canvasHeight/2;
var canvasWidthDec = canvasWidth*gridDivision;
var canvasHeightDec = canvasHeight*gridDivision;
var c = math.complex();
var set = math.complex();
// c = math.complex(-0.687,+0.312);
c = math.complex(-0.123 ,0.745); //conejo douady
// c = math.complex(0, 1);//dendrita (frontera mandelbrot)/**/
// c = math.complex(0.391, 0.587);//disco de siegel)/**/
// c = math.complex( -1.375 );//cool
// c = math.complex(-0.75); //mandelbrot
// c = math.complex(-0.75); //san marco
// c = math.complex(0.27, 0.01); //cerebro espiral
// c = math.complex(0.36, 0.32); //espiral italia
// c = math.complex(-0.74, 0.12); //espiral dragon costa grecia
// c = math.complex(-0.75, 0.03); //san marco inclinado
// c = math.complex(0.37, 0.28); //espiral
// c = math.complex(-0.8 ,0.156); //espiral bola drac
// c = math.complex(0.360 , 0.1003); //espiral
// c = math.complex(-0.123 , 0.745);//empty brain
// c = math.complex(-0.687,0.312);//

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

