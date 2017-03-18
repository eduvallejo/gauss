function draw () {
	
	//erase canvas
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ctx.rect(canvas.width/3, canvas.height/3, Math.sqrt(Area1), Math.sqrt(Area1));
	// console.log("set(" + i + "+" + j + "i) : " + set);
	// for (var i = -(canvas.width/2); i < (canvas.width)/2; i++) {
	// 	for (var j = -canvas.height/2; j < canvas.height/2; j++) {
	for (var i = 0; i < canvas.width; i++) {
		for (var j = 0; j < canvas.height; j++) {
			if (grid1[i][j] == 1) {
				ctx.fillRect(i, j, 1, 1);
			}
		}
	}
	// ctx.fillRect()
	// ctx.stroke();

function calcularSet(real, imag) {
	parser.eval('a = ' + real + ' + ' + imag + 'i');
	var result = parser.eval('a * a + 0.25'); //c=0.25 para el cerebro
	// var modulus = Math.sqrt(parser.eval('re(result) * re(result)') + parser.eval('im(result) * im(result)'));

	return result;
	// console.log("parser.eva draw.jsl('re(a)') : " + parser.eval('re(a)'));
	// console.log("parser.eval('a ^ 2') : " + parser.eval('a * a'));
	// body...
}
			
}

function fillRect (i,j) {
	ctx.fillRect(i*zoom,j*zoom,zoom,zoom);//principioX, principioY, longitud, altura)
	console.log("fillrect.js");
}

function deleteRect (i,j) {
	// ctx.fillRect(i*zoom,j*zoom,zoom,zoom);//principioX, principioY, longitud, altura)
	ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
}