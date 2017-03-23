
/*conseguido toroide vertical aparte del ya realizado horizontal*/
/*primero se da valor al primer array(grid1), luego se checkean las reglas y se asigna valor a la grid2*/
//checking neighbourhood
function checkRules(argument) {
	while(numGenerations <= maxIterations){
		for (var i = 0; i < canvasWidth * gridDivision; i++) {
			for (var j = 0; j < canvasHeight * gridDivision; j++) {
				gridZ[i][j] = math.multiply(gridZ[i][j], gridZ[i][j]);
				gridZ[i][j] = math.add (gridZ[i][j] , c);
				// console.log("gridZ[" + i + "][ "+ j + "] : " + gridZ[i][j]);
				set = gridZ[i][j];
				var modulus = math.complex(set.re*set.re + set.im*set.im);
				if ((modulus >= 2 || modulus <= -2) && colorSet[i][j] == false) {
					colorSet[i][j] = true;
					gridColor[i][j] = numGenerations + 1;//125 = rojo
					// console.log("modulus : " + modulus);
					// console.log("gridColor[" + i + "][" + j + "] : " + gridColor[i][j]);
					
				}
			}
		}
		numGenerations++;
		// console.log("numGenerations : " + numGenerations);
	}//end while
	for (var i = 0; i < canvasWidth * gridDivision; i++) {
		for (var j = 0; j < canvasHeight * gridDivision; j++) {
			set = gridZ[i][j];
			var modulus = math.complex(set.re*set.re + set.im*set.im);
			if (modulus > -2 && modulus < 2) {
			// console.log("modulus : " + modulus);
				// console.log("i, j  : " + i + ", " + j );
				
				// (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
				
				// colorPixel = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
				ctx.fillStyle= "#000000";
				// grid1[i][j]  = "000000";
				// ctx.fillStyle= "#004c00";
				ctx.fillRect(i*zoom,j*zoom,zoom,zoom);
			}else{
				c1Integer =  gridColor[i][j] * 10 ;

				colorPixel = c1Integer.toString(16) ;
				// console.log("c1Integer.toString(16) : " + colorPixel);
				
				if (c1Integer > 15 && c1Integer < 256) {
					// colorHex = "#FF" + colorPixel + "000";
					colorHex = "#FF" + colorPixel  + "00";
					ctx.fillStyle = colorHex;
					ctx.fillRect(i*zoom,j*zoom,zoom,zoom);
						// console.log("colorHex[" + gridColor[i][j] + "] : " + colorHex);
				}else if (c1Integer >= 256){
    				colorHex = "#FFF" + colorPixel + "";
					// console.log("colorHex.length : " + colorHex.length);
					
					ctx.fillStyle = colorHex;
					ctx.fillRect(i*zoom,j*zoom,zoom,zoom);
						// console.log("c1Integer : " + c1Integer);
				}else{
    				colorHex = "#FF0" + colorPixel + "00";
					// console.log("colorHex.length : " + colorHex.length);
					
					ctx.fillStyle = colorHex;
					ctx.fillRect(i*zoom,j*zoom,zoom,zoom);
						// console.log("c1Integer : " + c1Integer);
				}
				if (colorHex.length != 7) {

						console.log("c1Integer : " + c1Integer);
						console.log("gridColor[i][j] : " + gridColor[i][j]);
						console.log("colorPixel : " + colorPixel);
								
						console.log("colorHex[" + c1Integer + "] : " + colorHex);

				}
				
			}
		}
	}
	//DEBUG
	// for (var i = 0; i < canvasWidthDec; i++) {
	// 	for (var j = 0; j < canvasHeightDec; j++) {
	// 		console.log("grid1[" + i + "][" + j + "] : " + grid1[i][j]);
			
	// 	}
	// }
	// ajax(grid1);
}

// (-5 - 5i)² = 50i
 // (-5 - 4i)² = 9+40i

 //50i² = -50
 // (4 + 4i)^2 = 32i
//32i^2 = -32
//draw grid optimizada para imprimir solo cuando pase de 0 a 1 o borrar solo de 1 a 0
// function drawGrid(argument) {
// 	// checkRules();
// 	console.log("drawGrid");
	
// 	for (var i = 0; i < canvasWidth; i++) {
// 		for (var j = 0; j < canvasHeight; j++) {

// 			ctx.fillRect(i*zoom,j*zoom,zoom,zoom); // fill in the pixel(1x1) at (0,0)
// 		}
// 	}
// 	// document.title = "Generations: " + numGenerations++;
// 	// bucle = window.setTimeout(drawGrid,interval);

// }

