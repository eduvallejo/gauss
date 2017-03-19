//draw first grid a lo bruto , es necesario NO optimizar esta primera iteracion
function drawVeryFirstGrid(argument) {
	for (var i = 0; i < canvasWidth*gridDivision ; i++) {
		// console.log("i : " + i);
		
		var iDec = i / gridDivision;
	  	// console.log("i/gridDivision: " + iDec);
	  // console.log("(i/10) ) : " + ((i/10) ));
	  for (var j = 0; j < canvasHeight*gridDivision ; j++) {
	  	// console.log("j/10 : " + j/10);
	  	var jDec = j/ gridDivision;
	  	var set = math.complex();
	  	var z = math.complex();
	  	var zSquare = math.complex();
	  	// var c = math.complex();
	  	// c = math.complex(0.25 ,0);

		// set = calcularSet(i, j);
		// z = (parser.eval('a = ' + (i/5)  + ' + ' + (j/5)  + 'i'));
		// console.log("z : " + z);
		z = math.complex(iDec - halfCanvasWidth, jDec - halfCanvasHeight);
		// console.log("z : " + z);
		
		zSquare = math.multiply(z, z);
		// console.log("zSquare : " + zSquare);
		// set = parser.eval('a * a + 0.25'); 

		set = math.add(zSquare, c);
		gridZ[i][j] = set;
		// console.log("gridZ[" + i + "][" + j + "] : " + gridZ[i][j]);
		
		// (-0.5-0.5i)^2+0.25 = 0.25 + 0.5i 
		// console.log("set : " + set);
		
		
		var modulus = math.complex(set.re*set.re + set.im*set.im) 
		// console.log("modulus[" + iDec + "][ " + jDec + "] : " + modulus);
														
		if (modulus < 2 && modulus > -2) {
			// ctx.fillRect(i+canvas.width/2, j+canvas.height/2, 1, 1);
			grid1[i][j] = 1;
			// console.log("modulus[" +i/10 +"]["+ j/10 +"] : " + modulus);
			// console.log("i, j modulo<2: " + i + ", " + j);
		}
			// console.log("grid1[i][j] : " + grid1[i][j]);
	   
	    // console.log("BUCLE2");
	     // console.log("bucle2 : [" + i +"]["+j+"]= "+ grid2[i][j]);

	    if (grid1[i][j] == 1){
	      // console.log("bucle2: " + i +","+ j);
	      // console.log(i);
	      ctx.fillRect(i*zoom,j*zoom,zoom,zoom); // fill in the pixel(1x1) at (0,0)
	      // console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid1 : [" + i + "][" + j + "]= " + grid1[i][j]);
	      
	    }else{  //pattern = "ooo$oobbbbbb!"
	      grid1[i][j] = 0;
	      ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
	      // ctx.clearRect(0,0,canvasWidth*zoom-1, canvasHeight*zoom-1);
	      //console.log("grid1[" + i+ "]["+ j + "] : " + grid1[i][j] +", grid2[" + i+ "]["+ j + "] : " + grid2[i][j] );
	    }
	    //copiar la grid1 a la grid1
	    grid2[i][j] = grid1[i][j];
	  };
	};
	document.title = "Generation: " + numGenerations++;
	// window.setTimeout(drawPixels1,interval);
}

/*conseguido toroide vertical aparte del ya realizado horizontal*/
/*primero se da valor al primer array(grid1), luego se checkean las reglas y se asigna valor a la grid2*/
//checking neighbourhood
function checkRules(argument) {
	totalFuera = 0;
	for (var i = 0; i < canvasWidth*gridDivision ; i++) {
		var iDec = i / gridDivision;
	  	// console.log("i/10 : " + i/10);
	  // console.log("(i/10) ) : " + ((i/10) ));
	  for (var j = 0; j < canvasHeight*gridDivision ; j++) {
	  	// console.log("j/10 : " + j/10);
	  	var jDec = j / gridDivision;
	  	var set = math.complex();
	  	var z = math.complex();

	  	var zSquare = math.complex();
	  	

		// set = calcularSet(i, j);
		// z = (parser.eval('a = ' + (i/5)  + ' + ' + (j/5)  + 'i'));
		// console.log("z : " + z);
		z = math.complex(iDec - halfCanvasWidth, jDec - halfCanvasHeight);
		// console.log("z : " + z);
		
		zSquare = math.multiply(gridZ[i][j], gridZ[i][j]);
		// console.log("zSquare : " + zSquare);
		// set = parser.eval('a * a + 0.25'); 

		set = math.add(zSquare, c);
		gridZ[i][j] = set;
				
		
		var modulus = math.complex(set.re*set.re + set.im*set.im) 
		// console.log("modulus[" + iDec + "][ " + jDec + "] : " + modulus);
		if (modulus < 2 && modulus > -2) {
			// ctx.fillRect(i+canvas.width/2, j+canvas.height/2, 1, 1);
			grid1[i][j] = 1;
			// console.log("i, j modulo<2: " + i + ", " + j);
			// console.log("grid1[" + i +"][" + j +"] : " + grid1[i][j]);
			// console.log("grid2[" + i +"][" + j +"] : " + grid2[i][j]);
		}else{
			grid1[i][j] = 0;			
		}
	  };  
	};
}

//draw grid optimizada para imprimir solo cuando pase de 0 a 1 o borrar solo de 1 a 0
function drawGrid(argument) {
	checkRules();
	
	for (var i = 0; i < canvasWidth*gridDivision ; i++) {
		var iDec = i / gridDivision;
	  	// console.log("i/10 : " + i/10);
	    // console.log("(i/10) ) : " + ((i/10) ));
	for (var j = 0; j < canvasHeight*gridDivision ; j++) {
	  	// console.log("j/10 : " + j/10);
	  	var jDec = j / gridDivision;
			if ((grid1[i][j] == 0) && (grid2[i][j] == 1) ){
				// console.log("0,1");
				ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
				// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);				
			}else if((grid1[i][j] == 1) && (grid2[i][j] == 0)){  //pattern = "ooo$oobbbbbb!"
				// console.log("1,0");
				ctx.fillRect(i*zoom,j*zoom,zoom,zoom); // fill in the pixel(1x1) at (0,0)
			}
			grid2[i][j] = grid1[i][j];
		};
	};
	document.title = "Generations: " + numGenerations++;
	// bucle = window.setTimeout(drawPixels1,interval);
	bucle = window.setTimeout(drawGrid,interval);

}

